import type { EmailFormData } from "@/types";
import { EMAIL_CONFIG } from "../../../config/email";

// Convert markdown-style formatting to HTML
function formatMessageToHTML(message: string): string {
  let formattedMessage = message;

  // Convert bold **text** to <strong>text</strong>
  formattedMessage = formattedMessage.replace(
    /\*\*(.*?)\*\*/g,
    "<strong>$1</strong>"
  );

  // Convert italic *text* to <em>text</em>
  formattedMessage = formattedMessage.replace(
    /(?<!\*)\*([^*]+?)\*(?!\*)/g,
    "<em>$1</em>"
  );

  // Convert code `text` to <code>text</code>
  formattedMessage = formattedMessage.replace(
    /`(.*?)`/g,
    '<code style="background-color: #f1f1f1; padding: 2px 4px; border-radius: 4px; font-family: monospace;">$1</code>'
  );

  // Convert links [text](url) to <a href="url">text</a>
  formattedMessage = formattedMessage.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" style="color: #3B82F6; text-decoration: underline;">$1</a>'
  );

  // Convert line breaks to <br>
  formattedMessage = formattedMessage.replace(/\n/g, "<br>");

  return formattedMessage;
}

export function generateEmailHTML(
  template: string,
  formData: EmailFormData
): string {
  let html = template;

  // Replace logo URL with proper domain
  html = html.replace(
    /https:\/\/your-domain\.com\/senja-logo\.png/g,
    EMAIL_CONFIG.LOGO_URL
  );

  // Format message content
  const formattedMessage = formatMessageToHTML(formData.message);

  // Replace placeholders
  html = html.replace(
    /\{\{SENDER_NAME\}\}/g,
    formData.senderName || "SenjaLabs"
  );
  html = html.replace(/\{\{MESSAGE\}\}/g, formattedMessage);
  html = html.replace(
    /\{\{FOOTER\}\}/g,
    formData.footer || "Thank you for joining our community!"
  );

  // Handle conditional blocks
  if (formData.url) {
    html = html.replace(/\{\{#if URL\}\}/g, "");
    html = html.replace(/\{\{\/if\}\}/g, "");
    html = html.replace(/\{\{URL\}\}/g, formData.url);
  } else {
    html = html.replace(/\{\{#if URL\}\}[\s\S]*?\{\{\/if\}\}/g, "");
  }

  if (formData.date) {
    html = html.replace(/\{\{#if DATE\}\}/g, "");
    html = html.replace(/\{\{\/if\}\}/g, "");
    html = html.replace(/\{\{DATE\}\}/g, formData.date);
  } else {
    html = html.replace(/\{\{#if DATE\}\}[\s\S]*?\{\{\/if\}\}/g, "");
  }

  return html;
}
