// script //

function capitalize(s) {
  return (s.slice(0, 1).toUpperCase()) + (s.slice(1))
};

console.log(capitalize('alpha')); // Alpha

function reverseString(s) {
  return s.split("").reverse().join("");
}

console.log(reverseString('Hello')) // olleH

function Calculator() {
  function add(x, y) {
    return x + y;
  }

  console.log(add(2, 2)) // 4

  function subtract(x, y) {
    return x - y;
  }

  console.log(subtract(10, 3)) // 7

  function divide(x, y) {
    return x / y;
  }

  console.log(divide(10, 2)) // 5

  function multiply(x, y) {
    return x * y;
  }

  console.log(multiply(5, 5)) // 25
}

Calculator();

function isLetter(char) {
  return /^[a-zA-Z]$/.test(char);
}

function shiftChar(char, shiftFactor) {
  const charCode = char.charCodeAt(0);
  let shiftedCharCode;

  if (isLetter(char)) {
    const isUpperCase = char === char.toUpperCase();
    const baseCharCode = isUpperCase ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
    shiftedCharCode = ((charCode - baseCharCode + shiftFactor) % 26 + 26) % 26 + baseCharCode;
  } else {
    shiftedCharCode = charCode;
  }

  return String.fromCharCode(shiftedCharCode);
}

function caesarCipher(inputString, shiftFactor) {
  return inputString.split('').map(char => shiftChar(char, shiftFactor)).join('');
}

const input1 = "Hello, World!";
const shiftFactor1 = 3;
console.log(caesarCipher(input1, shiftFactor1)); // Outputs: "Khoor, Zruog!"

function analyzeArray(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  const average = sum / numbers.length;
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const length = numbers.length;

  return {
    average,
    min,
    max,
    length,
  };
}

const numbersArray = [1,8,3,4,2,6];
const analysisResult = analyzeArray(numbersArray);

console.log("Analysis result:", analysisResult); // Outputs: { average: 4, min: 5, max: 25, length: 5 }


module.exports = capitalize;
// module.exports = reverseString;

// caesarCipher, analyzeArray;