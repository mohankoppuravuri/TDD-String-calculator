function getDelimiterRegex(delimiter: string): RegExp {
  const regexString = delimiter
    .split("")
    .reduce((regexString, currentCharacter) => {
      if (currentCharacter === "[") {
        return regexString + regexString ? "|(" : "(";
      }
      if (currentCharacter === "]") {
        return regexString + ")";
      }
      return regexString + "/" + currentCharacter;
    }, "");

  return new RegExp(regexString);
}

function sumOfArray(numbersArray: string[]): number {
  const numbersLesserThan1000 = formatNumbersArray(numbersArray);

  return numbersLesserThan1000.reduce((acc, currentNumber) => {
    return acc + Number(currentNumber ?? 0);
  }, 0);
}

function multiplyNumbers(numbersArray: string[]): number {
  const numbersLesserThan1000 = formatNumbersArray(numbersArray);

  return numbersLesserThan1000.reduce((acc, currentNumber) => {
    return acc * Number(currentNumber ?? 1);
  }, 1);
}

function formatNumbersArray(numbersArray: string[]) {
  const collectNegativeNumbers = numbersArray.filter((a) => Number(a) < 0);
  if (collectNegativeNumbers.length) {
    throw Error(
      `negative numbers not allowed ${collectNegativeNumbers.join(", ")}`
    );
  }
  const numbersLesserThan1000 = numbersArray.filter((a) => Number(a) < 1000);
  return numbersLesserThan1000;
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
        : getDelimiterRegex(firstLine.substring(2));
      
      const numbersArray = numbers.split(/[\n]/)[1].split(delimiter);

      if (delimiter === "*") {
        // Multiple
        return multiplyNumbers(numbersArray);
      }else {
      return sumOfArray(numbersArray);
    }
  }
  const numbersArray = numbers.split(/[\n,]/);
  return sumOfArray(numbersArray);
}
