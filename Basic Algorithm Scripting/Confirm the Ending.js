/*
Tests
Waiting:confirmEnding("Bastian", "n") should return true.
Waiting:confirmEnding("Congratulation", "on") should return true.
Waiting:confirmEnding("Connor", "n") should return false.
Waiting:confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.
Waiting:confirmEnding("He has to give me a new name", "name") should return true.
Waiting:confirmEnding("Open sesame", "same") should return true.
Waiting:confirmEnding("Open sesame", "sage") should return false.
Waiting:confirmEnding("Open sesame", "game") should return false.
Waiting:confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.
Waiting:confirmEnding("Abstraction", "action") should return true.
Waiting:Your code should not use the built-in method .endsWith() to solve the challenge.
 */
function confirmEnding(str, target) {
  // Get the length of the target string
  const targetLength = target.length;

  // Use the substring method to get the end of the string with a length equal to the target string
  const endOfString = str.slice(-targetLength);

  // Compare the end of the string with the target
  return endOfString === target;
}

// Test cases
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("Open sesame", "same"));
console.log(confirmEnding("Open sesame", "sage"));
console.log(confirmEnding("Open sesame", "game"));
console.log(confirmEnding("If you want to save our world, you must hurry. We don't know how much longer we can withstand the nothing", "mountain"));
console.log(confirmEnding("Abstraction", "action"));
