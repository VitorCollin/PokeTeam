export default function formatName(text: string): string {
  const firstLetter = text.charAt(0).toUpperCase();
  const slicedText = text.slice(1);

  return firstLetter + slicedText;
}
