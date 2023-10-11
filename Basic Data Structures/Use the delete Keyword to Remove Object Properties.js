/*
ests
Waiting:The foods object should only have three keys: apples, grapes, and bananas.
Waiting:The oranges, plums, and strawberries keys should be removed using delete.
 */
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);
