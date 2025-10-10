'use client';

import { EmailFormData } from './types';

interface EmailFormFieldsProps {
  emailForm: EmailFormData;
  onFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function EmailFormFields({ emailForm, onFormChange }: EmailFormFieldsProps) {
  return (
    <div className="space-y-6">
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
          onChange={onFormChange}
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
          onChange={onFormChange}
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
          onChange={onFormChange}
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
          onChange={onFormChange}
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
          onChange={onFormChange}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
        />
      </div>

      {/* Footer */}
      <div>
        <label htmlFor="footer" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Footer Message (Optional)
        </label>
        <input
          type="text"
          id="footer"
          name="footer"
          value={emailForm.footer}
          onChange={onFormChange}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          placeholder="Thank you for joining our community!"
        />
      </div>
    </div>
  );
}