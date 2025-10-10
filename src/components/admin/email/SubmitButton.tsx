'use client';

interface SubmitButtonProps {
  isLoading: boolean;
  onSubmit: (e: React.FormEvent) => void;
}

export default function SubmitButton({ isLoading, onSubmit }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isLoading}
      onClick={onSubmit}
      className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 px-4 rounded-md transition-colors flex items-center justify-center font-medium"
    >
      {isLoading ? (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
          Sending Email...
        </>
      ) : (
        'Send Email Broadcast'
      )}
    </button>
  );
}