export function add(numbers: string): number {
  const [a = 0, b = 0] = numbers.split(",");
  return Number(a) + Number(b);
}
