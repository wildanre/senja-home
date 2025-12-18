export function StepsIndicator() {
  const steps = [
    { number: 1, label: "Verify with Discord", active: true },
    { number: 2, label: "Join Discord Channel", active: false },
    { number: 3, label: "Fill in your details", active: false },
  ];

  return (
    <div className="relative z-10 space-y-3">
      {steps.map((step) => (
        <div
          key={step.number}
          className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
            step.active
              ? "bg-[#e7b67c]/10 border-[#e7b67c]/30"
              : "bg-white/5 border-white/10 opacity-50"
          } border`}
        >
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 ${
              step.active
                ? "bg-[#e7b67c] text-[#120a06]"
                : "bg-white/10 text-neutral-600"
            }`}
          >
            {step.number}
          </div>
          <span
            className={`text-sm font-medium flex-1 ${
              step.active ? "text-white" : "text-neutral-500"
            }`}
          >
            {step.label}
          </span>
          {step.active && (
            <span className="text-xs text-[#e7b67c] font-medium">Active</span>
          )}
        </div>
      ))}
    </div>
  );
}
