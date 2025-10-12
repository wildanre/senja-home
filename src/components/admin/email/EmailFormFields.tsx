'use client';

import { EmailFormData } from './types';
import { useRef, useState } from 'react';

interface EmailFormFieldsProps {
  emailForm: EmailFormData;
  onFormChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function EmailFormFields({ emailForm, onFormChange }: EmailFormFieldsProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [cursorPosition, setCursorPosition] = useState(0);

  // Handle textarea cursor position
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCursorPosition(e.target.selectionStart || 0);
    onFormChange(e);
  };

  // Handle textarea click to update cursor position
  const handleTextareaClick = (e: React.MouseEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    setCursorPosition(target.selectionStart || 0);
  };

  // Handle keyboard events to update cursor position
  const handleTextareaKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    setCursorPosition(target.selectionStart || 0);
  };

  // Insert formatting at cursor position
  const insertFormatting = (startTag: string, endTag: string, placeholder = '') => {
    if (!textareaRef.current) return;
    
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = textarea.value.substring(start, end);
    const textToInsert = selectedText || placeholder;
    
    const newText = 
      textarea.value.substring(0, start) + 
      startTag + textToInsert + endTag + 
      textarea.value.substring(end);
    
    // Create synthetic event to trigger form change
    const event = {
      target: {
        name: 'message',
        value: newText
      }
    } as React.ChangeEvent<HTMLTextAreaElement>;
    
    onFormChange(event);
    
    // Focus back to textarea and set cursor position
    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + startTag.length + textToInsert.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  // Formatting shortcuts
  const formatBold = () => insertFormatting('**', '**', 'bold text');
  const formatItalic = () => insertFormatting('*', '*', 'italic text');
  const formatUnderline = () => insertFormatting('<u>', '</u>', 'underlined text');
  const formatLink = () => insertFormatting('[', '](https://example.com)', 'link text');
  const formatCode = () => insertFormatting('`', '`', 'code');
  const insertBreak = () => insertFormatting('\n\n', '', '');

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
          ref={textareaRef}
          id="message"
          name="message"
          value={emailForm.message}
          onChange={handleTextareaChange}
          onClick={handleTextareaClick}
          onKeyUp={handleTextareaKeyUp}
          required
          rows={6}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
          placeholder="Enter your email message..."
        />
        
        {/* Formatting Toolbar */}
        <div className="border border-t-0 border-gray-300 dark:border-gray-600 rounded-b-md bg-gray-50 dark:bg-gray-800 px-3 py-2">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={formatBold}
              className="px-2 py-1 text-xs bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors font-bold"
              title="Bold (Ctrl+B)"
            >
              <strong>B</strong>
            </button>
            <button
              type="button"
              onClick={formatItalic}
              className="px-2 py-1 text-xs bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors italic"
              title="Italic (Ctrl+I)"
            >
              <em>I</em>
            </button>
            <button
              type="button"
              onClick={formatUnderline}
              className="px-2 py-1 text-xs bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors underline"
              title="Underline"
            >
              U
            </button>
            <button
              type="button"
              onClick={formatLink}
              className="px-2 py-1 text-xs bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              title="Insert Link"
            >
              🔗
            </button>
            <button
              type="button"
              onClick={formatCode}
              className="px-2 py-1 text-xs bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors font-mono"
              title="Code"
            >
              &lt;/&gt;
            </button>
            <button
              type="button"
              onClick={insertBreak}
              className="px-2 py-1 text-xs bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              title="Line Break"
            >
              ⏎
            </button>
          </div>
          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            <strong>Tip:</strong> Select text and click formatting buttons, or use keyboard shortcuts. 
            <span className="block mt-1">
              <strong>Bold:</strong> **text** | <strong>Italic:</strong> *text* | <strong>Link:</strong> [text](url) | <strong>Code:</strong> `text`
            </span>
          </div>
        </div>
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