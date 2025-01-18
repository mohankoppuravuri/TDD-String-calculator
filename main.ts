function sumOfArray(numbersArray: string[]): number {
  const collectNegativeNumbers = numbersArray.filter((a) => Number(a) < 0);
  if (collectNegativeNumbers.length) {
    throw Error(
      `negative numbers not allowed ${collectNegativeNumbers.join(", ")}`
    );
  }
  const numbersLesserThan1000 = numbersArray.filter((a) => Number(a) < 1000);

  return numbersLesserThan1000.reduce((acc, currentNumber) => {
    return acc + Number(currentNumber ?? 0);
  }, 0);
}

export function add(numbers: string): number {
  const firstLine = numbers.split(/[\n]/)[0];
  if (firstLine.substring(0, 2) === "//") {
    // Custom delimiter
    // First line single delimiter //* length = 3;
    // First line multiple delimiter //[**] delimiter starts from  3rd index to last but one index;

    const delimiter =
      firstLine.length === 3
        ? firstLine.substring(2)
        : firstLine.substring(3, firstLine.length - 1);
    const numbersArray = numbers.split(/[\n]/)[1].split(delimiter);
    return sumOfArray(numbersArray);
  }
  const numbersArray = numbers.split(/[\n,]/);
  return sumOfArray(numbersArray);
}
