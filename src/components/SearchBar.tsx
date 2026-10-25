interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="search"
      placeholder="Pesquise um Pokemon"
      aria-label="Barra de pesquisa de Pokemon"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
