/*
Tests
Waiting:bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].
Waiting:bouncer(["a", "b", "c"]) should return ["a", "b", "c"].
Waiting:bouncer([false, null, 0, NaN, undefined, ""]) should return [].
Waiting:bouncer([null, NaN, 1, 2, undefined]) should return [1, 2].
Waiting:You should not mutate arr.
 */

function bouncer(arr) {
  // Use the filter method to create a new array with truthy values
  return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));

