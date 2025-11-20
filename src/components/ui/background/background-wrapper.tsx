"use client";

export default function BackgroundWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full relative bg-black overflow-x-hidden">
      {children}
    </div>
  );
}
