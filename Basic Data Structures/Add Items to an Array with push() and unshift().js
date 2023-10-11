/*
Tests
Waiting:mixedNumbers(["IV", 5, "six"]) should now return ["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]
Waiting:The mixedNumbers function should utilize the push() method
Waiting:The mixedNumbers function should utilize the unshift() method
 */

function mixedNumbers(arr) {
  // Add 'I', 2, and 'three' to the beginning of the array
  arr.unshift('I', 2, 'three');
  // Add 7, 'VIII', and 9 to the end of the array
  arr.push(7, 'VIII', 9);
  return arr;
}

console.log(mixedNumbers(["IV", 5, "six"])); // Output: ["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]
