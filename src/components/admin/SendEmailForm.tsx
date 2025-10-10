'use client';

import { useState } from 'react';
import { getToken } from '@/lib/auth';

interface EmailTheme {
  id: string;
  name: string;
  color: string;
  primaryColor: string;
  backgroundColor: string;
  textColor: string;
  template: string;
}

const EMAIL_THEMES: EmailTheme[] = [
  {
    id: 'blue',
    name: 'Blue Professional',
    color: 'bg-blue-500',
    primaryColor: '#3B82F6',
    backgroundColor: '#F8FAFC',
    textColor: '#1E293B',
    template: `
      <div style="max-width: 600px; margin: 0 auto; background-color: #F8FAFC; padding: 20px; font-family: Arial, sans-serif;">
        <div style="background-color: white; border-radius: 8px; padding: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #3B82F6; margin: 0; font-size: 28px;">{{SENDER_NAME}}</h1>
            <div style="height: 3px; background-color: #3B82F6; width: 50px; margin: 10px auto;"></div>
          </div>
          <div style="color: #1E293B; line-height: 1.6; font-size: 16px;">
            {{MESSAGE}}
          </div>
          {{#if URL}}
          <div style="text-align: center; margin: 30px 0;">
            <a href="{{URL}}" style="background-color: #3B82F6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">Visit Website</a>
          </div>
          {{/if}}
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E2E8F0; text-align: center; color: #64748B; font-size: 14px;">
            <p>Thank you for joining us!</p>
            {{#if DATE}}<p>Date: {{DATE}}</p>{{/if}}
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'green',
    name: 'Green Natural',
    color: 'bg-green-500',
    primaryColor: '#10B981',
    backgroundColor: '#F0FDF4',
    textColor: '#1F2937',
    template: `
      <div style="max-width: 600px; margin: 0 auto; background-color: #F0FDF4; padding: 20px; font-family: Arial, sans-serif;">
        <div style="background-color: white; border-radius: 12px; padding: 30px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border-left: 4px solid #10B981;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #10B981; margin: 0; font-size: 28px;">{{SENDER_NAME}}</h1>
            <p style="color: #6B7280; margin: 5px 0;">Bringing innovation to life</p>
          </div>
          <div style="color: #1F2937; line-height: 1.7; font-size: 16px;">
            {{MESSAGE}}
          </div>
          {{#if URL}}
          <div style="text-align: center; margin: 30px 0;">
            <a href="{{URL}}" style="background-color: #10B981; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: 600;">Explore More</a>
          </div>
          {{/if}}
          <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #D1FAE5; text-align: center; color: #6B7280; font-size: 14px;">
            <p>🌱 Let's grow together!</p>
            {{#if DATE}}<p>📅 {{DATE}}</p>{{/if}}
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'yellow',
    name: 'Yellow Energetic',
    color: 'bg-yellow-500',
    primaryColor: '#F59E0B',
    backgroundColor: '#FFFBEB',
    textColor: '#1F2937',
    template: `
      <div style="max-width: 600px; margin: 0 auto; background-color: #FFFBEB; padding: 20px; font-family: Arial, sans-serif;">
        <div style="background-color: white; border-radius: 16px; padding: 30px; box-shadow: 0 8px 25px rgba(0,0,0,0.1); border: 2px solid #FEF3C7;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #F59E0B; margin: 0; font-size: 32px; text-shadow: 2px 2px 4px rgba(0,0,0,0.1);">{{SENDER_NAME}}</h1>
            <div style="background: linear-gradient(90deg, #F59E0B, #FBBF24); height: 4px; width: 80px; margin: 15px auto; border-radius: 2px;"></div>
          </div>
          <div style="color: #1F2937; line-height: 1.8; font-size: 16px;">
            {{MESSAGE}}
          </div>
          {{#if URL}}
          <div style="text-align: center; margin: 30px 0;">
            <a href="{{URL}}" style="background: linear-gradient(135deg, #F59E0B, #FBBF24); color: white; padding: 16px 32px; text-decoration: none; border-radius: 12px; display: inline-block; font-weight: 700; box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);">✨ Discover Now</a>
          </div>
          {{/if}}
          <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #FEF3C7; text-align: center; color: #92400E; font-size: 14px;">
            <p>⚡ Positive energy for a bright future!</p>
            {{#if DATE}}<p>🗓️ {{DATE}}</p>{{/if}}
          </div>
        </div>
      </div>
    `
  }
];

export default function SendEmailForm() {
  const [emailForm, setEmailForm] = useState({
    senderName: 'SenjaLabs',
    subject: '',
    message: '',
    url: '',
    date: ''
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

  const generateEmailHTML = () => {
    let template = selectedTheme.template;
    
    // Replace placeholders
    template = template.replace(/\{\{SENDER_NAME\}\}/g, emailForm.senderName || 'SenjaLabs');
    template = template.replace(/\{\{MESSAGE\}\}/g, emailForm.message);
    
    // Handle conditional blocks
    if (emailForm.url) {
      template = template.replace(/\{\{#if URL\}\}/g, '');
      template = template.replace(/\{\{\/if\}\}/g, '');
      template = template.replace(/\{\{URL\}\}/g, emailForm.url);
    } else {
      template = template.replace(/\{\{#if URL\}\}[\s\S]*?\{\{\/if\}\}/g, '');
    }
    
    if (emailForm.date) {
      template = template.replace(/\{\{#if DATE\}\}/g, '');
      template = template.replace(/\{\{\/if\}\}/g, '');
      template = template.replace(/\{\{DATE\}\}/g, emailForm.date);
    } else {
      template = template.replace(/\{\{#if DATE\}\}[\s\S]*?\{\{\/if\}\}/g, '');
    }
    
    return template;
  };

  const handleSendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSendingEmail(true);
    setEmailStatus('');

    try {
      const token = getToken();
      const emailHTML = generateEmailHTML();
      
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
          date: '' 
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
          {previewMode ? '📝 Edit' : '👀 Preview'}
        </button>
      </div>

      {previewMode ? (
        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Email Preview:</h3>
            <div 
              className="border rounded-lg p-4 bg-white max-h-96 overflow-y-auto"
              dangerouslySetInnerHTML={{ __html: generateEmailHTML() }}
            />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSendEmail} className="space-y-6">
          {/* Theme Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Choose Email Theme
            </label>
            <div className="grid grid-cols-3 gap-3">
              {EMAIL_THEMES.map((theme) => (
                <div
                  key={theme.id}
                  onClick={() => setSelectedTheme(theme)}
                  className={`p-3 border rounded-lg cursor-pointer transition-all ${
                    selectedTheme.id === theme.id
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                      : 'border-gray-300 dark:border-gray-600 hover:border-gray-400'
                  }`}
                >
                  <div className={`w-full h-3 ${theme.color} rounded mb-2`}></div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{theme.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sender Name */}
          <div>
            <label htmlFor="senderName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Sender Name
            </label>
            <input
              type="text"
              id="senderName"
              name="senderName"
              value={emailForm.senderName}
              onChange={handleFormChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Default: SenjaLabs"
            />
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={emailForm.subject}
              onChange={handleFormChange}
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter email subject..."
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={emailForm.message}
              onChange={handleFormChange}
              required
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="Enter your email message..."
            />
          </div>

          {/* URL */}
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Website URL (Optional)
            </label>
            <input
              type="url"
              id="url"
              name="url"
              value={emailForm.url}
              onChange={handleFormChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              placeholder="https://example.com"
            />
          </div>

          {/* Date */}
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Date (Optional)
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={emailForm.date}
              onChange={handleFormChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <button
            type="submit"
            disabled={isSendingEmail}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 px-4 rounded-md transition-colors flex items-center justify-center font-medium"
          >
            {isSendingEmail ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending Email...
              </>
            ) : (
              '📧 Send Email Broadcast'
            )}
          </button>
        </form>
      )}

      {emailStatus && (
        <div className="mt-4 p-4 rounded-md bg-gray-100 dark:bg-gray-700">
          <p className="text-sm text-gray-900 dark:text-white">{emailStatus}</p>
        </div>
      )}
    </div>
  );
}