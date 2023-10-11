/*
Tests
Waiting:reverseString("hello") should return a string.
Waiting:reverseString("hello") should return the string olleh.
Waiting:reverseString("Howdy") should return the string ydwoH.
Waiting:reverseString("Greetings from Earth") should return the string htraE morf sgniteerG.
 */
function reverseString(str) {
  // Convert the string to an array of characters, reverse it, and join it back into a string
  return str.split('').reverse().join('');
}

// Test cases
console.log(reverseString("hello"));
console.log(reverseString("Howdy"));
console.log(reverseString("Greetings from Earth"));  
