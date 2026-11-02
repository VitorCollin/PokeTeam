export default function getBarColor(value: number) {
  if (value < 50) return "bg-red-500";
  if (value < 90) return "bg-yellow-500";
  return "bg-green-500";
}
