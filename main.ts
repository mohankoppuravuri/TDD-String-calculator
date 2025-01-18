export function add(numbers: string): number {
  const numbersArray = numbers.split(",");
  return numbersArray.reduce((acc, currentNumber) => {
    return acc + Number(currentNumber ?? 0);
  }, 0);
}
