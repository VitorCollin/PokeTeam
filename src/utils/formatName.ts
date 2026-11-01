export default function formatName(text: string): string {
  const words = text.split("-");
  const formatted = words.map((word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const rest = word.slice(1);
    return firstLetter + rest;
  });
  return formatted.join(" ");
}
