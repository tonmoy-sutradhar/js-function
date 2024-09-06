/**
 * Object: Write a function to give me the sum of all numbers in an array.
 * step-1: declare a function
 * step-2: call check weather the function is called properly
 * step-3: set a parameter(s)
 * step-4: pas the parameter(s), check whether parameter is passed in array
 *step-5: do the function tasks (step by step)
 */

function sumOfNumbers(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum = sum + num;
    console.log(num);
  }
  return sum;
}
const numbs = [2, 3, 2, 1];
const sum = sumOfNumbers(numbs);
console.log("The sum of numbers : ", sum);
