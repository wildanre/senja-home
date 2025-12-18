interface FormInputProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  helpText?: string;
  className?: string;
}

export function FormInput({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
  disabled = false,
  helpText,
  className = "",
}: FormInputProps) {
  return (
    <div className="space-y-1.5 relative z-10">
      <label
        htmlFor={id}
        className="text-xs font-medium text-neutral-400 uppercase tracking-wider ml-1"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className={`w-full px-3 sm:px-4 py-2.5 sm:py-3.5 rounded-xl border border-white/10 bg-black/40 text-white text-sm sm:text-base placeholder:text-neutral-600 focus:outline-none focus:border-[#e7b67c]/50 focus:ring-1 focus:ring-[#e7b67c]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:border-white/20 ${className}`}
      />
      {helpText && <p className="text-xs text-neutral-500 ml-1">{helpText}</p>}
    </div>
  );
}
