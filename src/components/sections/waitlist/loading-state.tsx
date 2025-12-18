export function LoadingState() {
  return (
    <div className="space-y-6 bg-white/5 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl">
      <div className="flex items-center justify-center py-12">
        <div className="w-8 h-8 border-2 border-[#e7b67c]/30 border-t-[#e7b67c] rounded-full animate-spin" />
      </div>
    </div>
  );
}
