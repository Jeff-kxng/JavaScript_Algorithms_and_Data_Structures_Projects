/*
Tests
Waiting:copyMachine([true, false, true], 2) should return [[true, false, true], [true, false, true]]
Waiting:copyMachine([1, 2, 3], 5) should return [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]
Waiting:copyMachine([true, true, null], 1) should return [[true, true, null]]
Waiting:copyMachine(["it works"], 3) should return [["it works"], ["it works"], ["it works"]]
Waiting:The copyMachine function should utilize the spread operator with array arr
 */

function copyMachine(arr, num){
  // Create a new array by spreading the original array 'num' times

  let newArray = [...Array(num)].map(() => [...arr]);
  return newArray;
}
console.log(copyMachine([true, false, true], 2));
console.log(copyMachine([1, 2, 3], 5));
console.log(copyMachine([true, true, null], 1));
console.log(copyMachine(["it works"], 3)); 
