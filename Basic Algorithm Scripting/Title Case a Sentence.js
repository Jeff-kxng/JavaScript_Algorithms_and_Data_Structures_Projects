/*
Tests
Waiting:titleCase("I'm a little tea pot") should return a string.
Waiting:titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.
Waiting:titleCase("sHoRt AnD sToUt") should return the string Short And Stout.
Waiting:titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout.
 */
function titleCase(str) {
  // Split the sentence into words
  const words = str.split(" ");

  // Capitalize the first letter of each word and convert the rest to lowercase
  const titleCasedWords = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // Join the title-cased words back into a sentence
  return titleCasedWords.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
