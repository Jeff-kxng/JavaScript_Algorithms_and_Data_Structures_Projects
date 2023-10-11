/*
Tests
Waiting:palindrome("eye") should return a boolean.
Waiting:palindrome("eye") should return true.
Waiting:palindrome("_eye") should return true.
Waiting:palindrome("race car") should return true.
Waiting:palindrome("not a palindrome") should return false.
Waiting:palindrome("A man, a plan, a canal. Panama") should return true.
Waiting:palindrome("never odd or even") should return true.
Waiting:palindrome("nope") should return false.
Waiting:palindrome("almostomla") should return false.
Waiting:palindrome("My age is 0, 0 si ega ym.") should return true.
Waiting:palindrome("1 eye for of 1 eye.") should return false.
Waiting:palindrome("0_0 (: /-\ :) 0-0") should return true.
Waiting:palindrome("five|\_/|four") should return false.
 */
function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[\W_]/g, "").toLowerCase();

  // Reverse the cleaned string and compare it to the original
  return cleanStr === cleanStr.split("").reverse().join("");
}

console.log(palindrome("eye"));
console.log(palindrome("_eye"));
console.log(palindrome("race car"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("never odd or even"));
console.log(palindrome("nope"));
console.log(palindrome("almostomla"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("1 eye for of 1 eye."));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("five|\_/|four"));
