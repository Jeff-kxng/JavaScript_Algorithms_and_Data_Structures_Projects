/*
Tests
Waiting:The quickCheck function should return a boolean (true or false), not a string ("true" or "false")
Waiting:quickCheck(["squash", "onions", "shallots"], "mushrooms") should return false
Waiting:quickCheck(["onions", "squash", "shallots"], "onions") should return true
Waiting:quickCheck([3, 5, 9, 125, 45, 2], 125) should return true
Waiting:quickCheck([true, false, false], undefined) should return false
Waiting:The quickCheck function should utilize the indexOf() method
 */

function quickCheck(arr, elem){
  // Use indexOf to check if the element exists in the array
  return arr.indexOf(elem) !== -1;
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
console.log(quickCheck(["onions", "squash", "shallots"], "onions"));
console.log(quickCheck([3, 5, 9, 125, 45, 2], 125));
console.log(quickCheck([true, false, false], undefined));
