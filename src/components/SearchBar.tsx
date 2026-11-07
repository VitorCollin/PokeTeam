import GlassCard from "./GlassCard";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  className: string;
}

export default function SearchBar({
  value,
  onChange,
  className,
}: SearchBarProps) {
  return (
    <GlassCard className="m-1.5 p-1.5 text-2xl">
      <input
        className={className}
        type="search"
        placeholder="Pesquise um Pokemon"
        aria-label="Barra de pesquisa de Pokemon"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </GlassCard>
  );
}
