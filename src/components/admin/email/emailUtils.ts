import { EmailTheme, EmailFormData } from './types';
import { EMAIL_CONFIG } from '../../../config/email';

export function generateEmailHTML(template: string, formData: EmailFormData): string {
  let html = template;
  
  // Replace logo URL with proper domain
  html = html.replace(/https:\/\/your-domain\.com\/senja-logo\.png/g, EMAIL_CONFIG.LOGO_URL);
  
  // Replace placeholders
  html = html.replace(/\{\{SENDER_NAME\}\}/g, formData.senderName || 'SenjaLabs');
  html = html.replace(/\{\{MESSAGE\}\}/g, formData.message);
  html = html.replace(/\{\{FOOTER\}\}/g, formData.footer || 'Thank you for joining our community!');
  
  // Handle conditional blocks
  if (formData.url) {
    html = html.replace(/\{\{#if URL\}\}/g, '');
    html = html.replace(/\{\{\/if\}\}/g, '');
    html = html.replace(/\{\{URL\}\}/g, formData.url);
  } else {
    html = html.replace(/\{\{#if URL\}\}[\s\S]*?\{\{\/if\}\}/g, '');
  }
  
  if (formData.date) {
    html = html.replace(/\{\{#if DATE\}\}/g, '');
    html = html.replace(/\{\{\/if\}\}/g, '');
    html = html.replace(/\{\{DATE\}\}/g, formData.date);
  } else {
    html = html.replace(/\{\{#if DATE\}\}[\s\S]*?\{\{\/if\}\}/g, '');
  }
  
  return html;
}