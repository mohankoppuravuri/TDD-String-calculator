function sumOfArray(numbersArray: string[]): number {
  return numbersArray.reduce((acc, currentNumber) => {
    if (Number(currentNumber) === -1) {
      throw Error(`negative numbers not allowed ${currentNumber}`);
    }
    return acc + Number(currentNumber ?? 0);
  }, 0);
}

export function add(numbers: string): number {
  const firstLine = numbers.split(/[\n]/)[0];
  if (firstLine.substring(0, 2) === "//") {
    // Custom delimiter
    const delimiter = firstLine.substring(2);
    const numbersArray = numbers.split(/[\n]/)[1].split(delimiter);
    return sumOfArray(numbersArray);
  }
  const numbersArray = numbers.split(/[\n,]/);
  return sumOfArray(numbersArray);
}
