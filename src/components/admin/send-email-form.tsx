"use client";

import { useState } from "react";
import { EmailTheme, EmailFormData } from "./email/types";
import { EMAIL_THEMES } from "./email/emailThemes";
import { generateEmailHTML } from "./email/emailUtils";
import { getCSRFToken, refreshCSRFToken } from "@/lib/csrf";
import ThemeSelector from "./email/theme-selector";
import EmailFormFields from "./email/email-form-fields";
import EmailPreview from "./email/email-preview";
import SubmitButton from "./email/submit-button";
import StatusMessage from "./email/status-message";

// Function to get today's date in YYYY-MM-DD format
const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split("T")[0];
};

export default function SendEmailForm() {
  const [emailForm, setEmailForm] = useState<EmailFormData>({
    senderName: "SenjaLabs",
    subject: "",
    message: "",
    url: "",
    date: getTodayDate(),
    footer: "Thank you for joining our community!",
  });
  const [selectedTheme, setSelectedTheme] = useState<EmailTheme>(
    EMAIL_THEMES[0]
  );
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailStatus, setEmailStatus] = useState<string>("");
  const [previewMode, setPreviewMode] = useState(false);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEmailForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getGeneratedEmailHTML = () => {
    return generateEmailHTML(selectedTheme.template, emailForm);
  };

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSendingEmail(true);
    setEmailStatus("");

    try {
      const emailHTML = getGeneratedEmailHTML();

      // Get CSRF token
      const csrfToken = await getCSRFToken();

      // Use Next.js API route which handles authentication via httpOnly cookie
      const response = await fetch("/api/admin/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-csrf-token": csrfToken,
        },
        credentials: "include", // Important: include cookies
        body: JSON.stringify({
          subject: emailForm.subject,
          message: emailHTML,
          senderName: emailForm.senderName || "SenjaLabs",
        }),
      });

      const data = await response.json();

      // Handle CSRF error - refresh token and retry
      if (response.status === 403 && data.error?.includes("CSRF")) {
        const newToken = await refreshCSRFToken();
        const retryResponse = await fetch("/api/admin/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-csrf-token": newToken,
          },
          credentials: "include",
          body: JSON.stringify({
            subject: emailForm.subject,
            message: emailHTML,
            senderName: emailForm.senderName || "SenjaLabs",
          }),
        });

        const retryData = await retryResponse.json();

        if (retryResponse.ok && retryData.success) {
          setEmailStatus(
            `✅ Email successfully sent to ${retryData.count} users!`
          );
          setEmailForm({
            senderName: "SenjaLabs",
            subject: "",
            message: "",
            url: "",
            date: getTodayDate(),
            footer: "Thank you for joining our community!",
          });
          return;
        }

        setEmailStatus(
          `❌ Failed to send email: ${
            retryData.error || "Unknown error occurred"
          }`
        );
        return;
      }

      if (response.ok && data.success) {
        setEmailStatus(`✅ Email successfully sent to ${data.count} users!`);
        setEmailForm({
          senderName: "SenjaLabs",
          subject: "",
          message: "",
          url: "",
          date: getTodayDate(),
          footer: "Thank you for joining our community!",
        });
      } else {
        setEmailStatus(
          `❌ Failed to send email: ${data.error || "Unknown error occurred"}`
        );
      }
    } catch (error) {
      setEmailStatus(
        "❌ Network error occurred while sending email. Please check your connection and try again."
      );
    } finally {
      setIsSendingEmail(false);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Send Email Broadcast
        </h2>
        <button
          onClick={() => setPreviewMode(!previewMode)}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md transition-colors"
        >
          {previewMode ? "Edit" : "Preview"}
        </button>
      </div>

      {previewMode ? (
        <EmailPreview emailHTML={getGeneratedEmailHTML()} />
      ) : (
        <form onSubmit={handleSendEmail} className="space-y-6" key="email-form">
          <ThemeSelector
            themes={EMAIL_THEMES}
            selectedTheme={selectedTheme}
            onThemeSelect={setSelectedTheme}
          />

          <EmailFormFields
            key="email-form-fields"
            emailForm={emailForm}
            onFormChange={handleFormChange}
          />

          <SubmitButton isLoading={isSendingEmail} onSubmit={handleSendEmail} />
        </form>
      )}

      <StatusMessage status={emailStatus} />
    </div>
  );
}
