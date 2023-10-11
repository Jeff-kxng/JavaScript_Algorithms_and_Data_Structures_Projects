/*
Tests
Waiting:popShift(["challenge", "is", "not", "complete"]) should return ["challenge", "complete"]
Waiting:The popShift function should utilize the pop() method
Waiting:The popShift function should utilize the shift() method
 */
function popShift(arr){
  // Remove the first element and assign it to a variable
  var firstElement = arr.shift();
  // Remove the last element and assign it to a variable
  var lastElement = arr.pop();

  return [firstElement, lastElement];
}

console.log(popShift(["Challenge", "is", "not", "complete"]));
