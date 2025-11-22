import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  message?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "white";
  className?: string;
  fullScreen?: boolean;
}

const sizeClasses = {
  sm: "h-6 w-6",
  md: "h-12 w-12",
  lg: "h-16 w-16",
  xl: "h-24 w-24",
};

const variantClasses = {
  primary: "border-blue-600",
  secondary: "border-gray-600",
  white: "border-white",
};

export default function LoadingSpinner({
  message = "Loading...",
  size = "md",
  variant = "primary",
  className,
  fullScreen = false,
}: LoadingSpinnerProps) {
  const content = (
    <div className="text-center">
      <div
        className={cn(
          "animate-spin rounded-full border-b-2 mx-auto mb-4",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
      />
      {message && (
        <p className="text-gray-600 dark:text-gray-400">{message}</p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {content}
      </div>
    );
  }

  return content;
}
