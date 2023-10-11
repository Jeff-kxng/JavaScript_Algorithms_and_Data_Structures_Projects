/*
Tests
Waiting:findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
Waiting:findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
Waiting:findLongestWordLength("May the force be with you") should return 5.
Waiting:findLongestWordLength("Google do a barrel roll") should return 6.
Waiting:findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
Waiting:findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.
 */
function findLongestWordLength(str) {
  // Split the sentence into words
  const words = str.split(' ');
  let longestLength = 0;

  // Iterate through the words and find the longest word
  for (const word of words) {
    const wordLength = word.length;
    if (wordLength > longestLength) {
      longestLength = wordLength;
    }
  }

  return longestLength;
}

// Test cases
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordLength("May the force be with you"));
console.log(findLongestWordLength("Google do a barrel roll"));
console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));
