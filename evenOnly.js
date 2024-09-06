function onlySum(numbers) {
  console.log(numbers);
  let sum = 0;
  for (const num of numbers) {
    if (num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
}
const nums = [2, 4, 5, 6];
const total = onlySum(nums);
console.log("Total number sum is: ", total);
