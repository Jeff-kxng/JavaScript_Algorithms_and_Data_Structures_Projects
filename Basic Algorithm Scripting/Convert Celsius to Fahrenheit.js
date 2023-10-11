/*
Tests
Waiting:convertCtoF(0) should return a number
Waiting:convertCtoF(-30) should return a value of -22
Waiting:convertCtoF(-10) should return a value of 14
Waiting:convertCtoF(0) should return a value of 32
 */

function convertCtoF(celsius) {
  var fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}

// Test cases
console.log(convertCtoF(0));
console.log(convertCtoF(-30));
console.log(convertCtoF(-10));
console.log(convertCtoF(0));
console.log(convertCtoF(20));
console.log(convertCtoF(30));
