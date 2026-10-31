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
    <input
      className={className}
      type="search"
      placeholder="Pesquise um Pokemon"
      aria-label="Barra de pesquisa de Pokemon"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
