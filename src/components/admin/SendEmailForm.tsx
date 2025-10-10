'use client';

import { useState } from 'react';
import { getToken } from '@/lib/auth';
import { EmailTheme, EmailFormData } from './email/types';
import { EMAIL_THEMES } from './email/emailThemes';
import { generateEmailHTML } from './email/emailUtils';
import ThemeSelector from './email/ThemeSelector';
import EmailFormFields from './email/EmailFormFields';
import EmailPreview from './email/EmailPreview';
import SubmitButton from './email/SubmitButton';
import StatusMessage from './email/StatusMessage';

// Function to get today's date in YYYY-MM-DD format
const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

export default function SendEmailForm() {
  const [emailForm, setEmailForm] = useState<EmailFormData>({
    senderName: 'SenjaLabs',
    subject: '',
    message: '',
    url: '',
    date: getTodayDate(),
    footer: 'Thank you for joining our community!'
  });
  const [selectedTheme, setSelectedTheme] = useState<EmailTheme>(EMAIL_THEMES[0]);
  const [isSendingEmail, setIsSendingEmail] = useState(false);
  const [emailStatus, setEmailStatus] = useState<string>('');
  const [previewMode, setPreviewMode] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEmailForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const getGeneratedEmailHTML = () => {
    return generateEmailHTML(selectedTheme.template, emailForm);
  };

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSendingEmail(true);
    setEmailStatus('');

    try {
      const token = getToken();
      const emailHTML = getGeneratedEmailHTML();
      
      console.log('🔄 Sending email request...');
      console.log('Token exists:', !!token);
      console.log('Email data:', {
        subject: emailForm.subject,
        senderName: emailForm.senderName,
        hasMessage: !!emailForm.message
      });
      
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001'}/admin/send-email`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          subject: emailForm.subject,
          message: emailHTML,
          senderName: emailForm.senderName || 'SenjaLabs'
        })
      });

      console.log('📡 Response status:', response.status);
      const data = await response.json();
      console.log('📡 Response data:', data);

      if (response.ok && data.success) {
        setEmailStatus(`✅ Email successfully sent to ${data.count} users!`);
        setEmailForm({ 
          senderName: 'SenjaLabs',
          subject: '', 
          message: '', 
          url: '', 
          date: getTodayDate(),
          footer: 'Thank you for joining our community!'
        });
      } else {
        console.error('❌ Email sending failed:', data.error);
        setEmailStatus(`❌ Failed to send email: ${data.error || 'Unknown error occurred'}`);
      }
    } catch (error) {
      console.error('🚨 Email sending error:', error);
      setEmailStatus('❌ Network error occurred while sending email. Please check your connection and try again.');
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
          {previewMode ? 'Edit' : 'Preview'}
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

          <SubmitButton 
            isLoading={isSendingEmail}
            onSubmit={handleSendEmail}
          />
        </form>
      )}

      <StatusMessage status={emailStatus} />
    </div>
  );
}