'use client';

interface EmailPreviewProps {
  emailHTML: string;
}

export default function EmailPreview({ emailHTML }: EmailPreviewProps) {
  return (
    <div className="space-y-4">
      <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
        <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Email Preview:</h3>
        <div 
          className="border rounded-lg p-4 bg-white max-h-screen overflow-y-auto"
          dangerouslySetInnerHTML={{ __html: emailHTML }}
        />
      </div>
    </div>
  );
}