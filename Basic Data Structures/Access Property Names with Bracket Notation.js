/*
ests
Waiting:checkInventory should be a function.
Waiting:The foods object should have only the following key-value pairs: apples: 25, oranges: 32, plums: 28, bananas: 13, grapes: 35, strawberries: 27.
Waiting:checkInventory("apples") should return 25.
Waiting:checkInventory("bananas") should return 13.
Waiting:checkInventory("strawberries") should return 27.
 */

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
function checkInventory(scannedItem) {
  return foods[scannedItem];
}

console.log(checkInventory("apples")); // Should return 25
console.log(checkInventory("bananas")); // Should return 13
console.log(checkInventory("strawberries")); // Should return 27

