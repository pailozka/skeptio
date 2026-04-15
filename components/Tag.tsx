export default function Tag({ label, variant = "navy" }: { label: string; variant?: "navy" | "light" | "outline" }) {
  const baseClass = "px-3 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-full border";
  
  const variants = {
    navy: "bg-dark text-light border-dark",
    light: "bg-light text-dark border-light/20",
    outline: "bg-transparent text-dark border-dark/20",
  };

  return (
    <span className={`${baseClass} ${variants[variant]}`}>
      {label}
    </span>
  );
}
