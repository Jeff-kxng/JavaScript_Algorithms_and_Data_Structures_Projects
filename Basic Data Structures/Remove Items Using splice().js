/*
Tests
Waiting:You should not change the original line of const arr = [2, 4, 5, 1, 7, 5, 2, 1];.
Waiting:arr should only contain elements that sum to 10.
Waiting:Your code should utilize the splice() method on arr.
Waiting:The splice should only remove elements from arr and not add any additional elements to arr.
 */
const arr =[2, 4, 5, 1, 7, 5, 2, 1];

// Iterate through the array and remove elements that do not sum to 10
for (let i = 0;i < arr.length; i++) {
  let sum = arr[i];

  // Check the sum of the current element and the next element
  for (let j = i + 1; j < arr.length; j++){
    sum += arr[j];

    // if the sum is equal to 10, break the loop and keep these elements
    if (sum == 10) {
      arr.splice(0, i); // Remove element before i
      arr.splice(j - i + 1);
      break;
    }
  }
}

console.log(arr);
