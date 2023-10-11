/*
Tests
Waiting:getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.
Waiting:getIndexToIns([10, 20, 30, 40, 50], 35) should return a number.
Waiting:getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.
Waiting:getIndexToIns([10, 20, 30, 40, 50], 30) should return a number.
Waiting:getIndexToIns([40, 60], 50) should return 1.
Waiting:getIndexToIns([40, 60], 50) should return a number.
Waiting:getIndexToIns([3, 10, 5], 3) should return 0.
Waiting:getIndexToIns([3, 10, 5], 3) should return a number.
Waiting:getIndexToIns([5, 3, 20, 3], 5) should return 2.
Waiting:getIndexToIns([5, 3, 20, 3], 5) should return a number.
Waiting:getIndexToIns([2, 20, 10], 19) should return 2.
Waiting:getIndexToIns([2, 20, 10], 19) should return a number.
Waiting:getIndexToIns([2, 5, 10], 15) should return 3.
Waiting:getIndexToIns([2, 5, 10], 15) should return a number.
Waiting:getIndexToIns([], 1) should return 0.
Waiting:getIndexToIns([], 1) should return a number.
 */
function getIndexToIns(arr, num) {
  // Sort the array in ascending order
  arr.sort(function(a, b) {
    return a - b;
  });

  // Find the index where the value should be inserted
  for (let i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      return i;
    }
  }

  // If the value is greater than all elements in the array, insert it at the end
  return arr.length;
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([3, 10, 5], 3));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([2, 20, 10], 19));
console.log(getIndexToIns([2, 5, 10], 15));
console.log(getIndexToIns([], 1));
