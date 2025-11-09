"use client";

export default function BackgroundWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-[#EB5B00] to-[#D84315] dark:bg-gradient-to-br dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950">
      {children}
    </div>
  );
}
