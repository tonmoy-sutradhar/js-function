function string(str) {
  let size = str.length;
  console.log(str, size);
  if (size % 2 == 0) {
    console.log("Even number.");
    // return true;
  } else {
    console.log("Odd number.");
    // return false;
  }
}
string("Tonmoy");
string("Tonmoy sutradhar");
string("Meghla sutradhar");
string("Bimol sutradhar");

// //////////////////////////////////////////////
console.log("<<<----------------------->>>");
function numbrofelement(num) {
  // console.log(numbrofelement);
  const len = num.length;
  return len;
}
numbrofelement([10, 2, 23, 3, 4, 5]);

console.log("<<<----------------------->>>");
function getage(person) {
  const age = person.age;
  return age;
}
