function price(price1, price2) {
  let sum = price1 + price2;
  return sum;
}

let bill = price(20, 80);
console.log(bill);

console.log("<<<-------------------------->>>");

function doMath(num1, num2) {
  const sum = num1 + num2;
  const diff = num1 - num2;
  const multiply = sum * diff;
  const div = multiply / 2;
  return div;
}

let mathResult = doMath(50, 20);
console.log(mathResult);

console.log("<<<-------------------------->>>");

function condition(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(condition(20));
console.log(condition(15));
console.log(condition(40));
