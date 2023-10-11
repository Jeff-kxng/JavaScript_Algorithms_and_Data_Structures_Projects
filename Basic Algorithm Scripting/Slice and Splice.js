/*
Tests
Waiting:frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
Waiting:frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
Waiting:frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
Waiting:All elements from the first array should be added to the second array in their original order. frankenSplice([1, 2, 3, 4], [], 0) should return [1, 2, 3, 4].
Waiting:The first array should remain the same after the function runs.
Waiting:The second array should remain the same after the function runs.
 */
function frankenSplice(arr1, arr2, n) {
  // Create a copy of the second array to avoid modifying it directly
  const arr2Copy = arr2.slice();

  // Iterate through the first array and insert its elements into the second array at the specified index
  for (let i = 0; i < arr1.length; i++) {
    arr2Copy.splice(n + i, 0, arr1[i]);
  }

  return arr2Copy;
}


console.log(frankenSplice([1, 2, 3], [4, 5], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
console.log(frankenSplice([1, 2, 3, 4], [], 0));
