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
          className={`flex items-center gap-3 p-3 rounded-lg ${
            step.active
              ? "bg-[#5865F2]/10 border-[#5865F2]/30"
              : "bg-white/5 border-white/5"
          } border`}
        >
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
              step.active
                ? "bg-[#5865F2] text-white"
                : "bg-white/10 text-neutral-500"
            }`}
          >
            {step.number}
          </div>
          <span
            className={`text-sm ${
              step.active ? "text-white font-medium" : "text-neutral-500"
            }`}
          >
            {step.label}
          </span>
          {step.active && (
            <span className="ml-auto text-xs text-[#5865F2] uppercase tracking-wider">
              Current
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
