// Write a program that takes in an unlimited number of command line arguments and prints out the sum of them. If any argument is not a whole number, skip it. Do not support negative numbers.

// Inputs -> What is my function going to receive?
// an unlimited number of command line arguments, only whole numbers

// Outputs -> What is my function going to output?
// console.log() -> prints out the sum of them

// Processing
// If any argument is not a whole number, skip it. Do not support negative numbers.

// Pseudo code

// Process being the practice.js file

// It looks like numbers are being turned into strings

const arguments = process.argv;
// I want to skip the first two elements
const modifiedArray = arguments.slice(2);

// Loop through the array
let sumOfNumbers = 0;
// for of loop
for(const element of modifiedArray){
    // console.log(element);
    const fullNumber = Number(element);
    // fullNumber returns a number or NaN = Not a Number
    // for each element I want to check if it is a whole positive number
    if(fullNumber > 0 && fullNumber % 1 === 0){
        // If it is, add it to the sum of numbers
        // sumOfNumbers = 10 + 5
        sumOfNumbers = sumOfNumbers + fullNumber;
    }
}
// return the number
console.log(sumOfNumbers);


