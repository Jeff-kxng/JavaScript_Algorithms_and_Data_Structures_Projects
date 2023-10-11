/*
Tests
htmlColorNames should return ["DarkSalmon", "BlanchedAlmond", "LavenderBlush", "PaleTurquoise", "FireBrick"]
The htmlColorNames function should utilize the splice() method
You should not use shift() or unshift().
You should not use array bracket notation.
 */
function htmlColorNames(arr) {
  // Remove the first two elements and add 'DarkSalmon' and 'BlanchedAlmond'

  arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
  return arr;
}

console.log(htmlColorNames(["LavenderBlush", "PaleTurquoise", "FireBrick"]));

