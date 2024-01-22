// Array Desctructuring and length of array
const numbers = [10, 20, 30, 40, 50];
const [firstNumber, secondNumber] = numbers;
console.log(firstNumber, secondNumber);

console.log(numbers.length);

// typeof operator
let myString = "Test";
let myNumber = 15;
let myBoolean = true;
console.log(typeof myBoolean);
console.log(typeof myString);
console.log(typeof myNumber);

//Arithmetic and Comparison operations
console.log(firstNumber + secondNumber);
console.log(firstNumber - secondNumber);
console.log(firstNumber == secondNumber);
console.log(firstNumber === secondNumber);
console.log(firstNumber != secondNumber);
console.log(firstNumber > secondNumber);
console.log(firstNumber < secondNumber);

//Logical Expressions
console.log(firstNumber % 2 == 0 && firstNumber > 0);
console.log(firstNumber % 2 == 0 || firstNumber > 0);
console.log(firstNumber >= 0);
