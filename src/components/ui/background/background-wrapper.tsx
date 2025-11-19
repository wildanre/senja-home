"use client";

export default function BackgroundWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen relative bg-black ">
      {children}
    </div>
  );
}
