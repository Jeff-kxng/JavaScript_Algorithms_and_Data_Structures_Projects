/*
Tests
Waiting:mutation(["hello", "hey"]) should return false.
Waiting:mutation(["hello", "Hello"]) should return true.
Waiting:mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
Waiting:mutation(["Mary", "Army"]) should return true.
Waiting:mutation(["Mary", "Aarmy"]) should return true.
Waiting:mutation(["Alien", "line"]) should return true.
Waiting:mutation(["floor", "for"]) should return true.
Waiting:mutation(["hello", "neo"]) should return false.
Waiting:mutation(["voodoo", "no"]) should return false.
Waiting:mutation(["ate", "date"]) should return false.
Waiting:mutation(["Tiger", "Zebra"]) should return false.
Waiting:mutation(["Noel", "Ole"]) should return true.
 */
function mutation(arr) {
  // Convert both strings to lowercase
  const str1 = arr[0].toLowerCase();
  const str2 = arr[1].toLowerCase();

  // Iterate through the characters of the second string
  for (let char of str2) {
    // If the character is not found in the first string, return false
    if (str1.indexOf(char) === -1) {
      return false;
    }
  }

  // If all characters are found, return true
  return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Mary", "Army"]));
console.log(mutation(["Mary", "Aarmy"]));
console.log(mutation(["Alien", "line"]));
console.log(mutation(["floor", "for"]));
console.log(mutation(["hello", "neo"]));
console.log(mutation(["voodoo", "no"]));
console.log(mutation(["ate", "date"]));
console.log(mutation(["Tiger", "Zebra"]));
console.log(mutation(["Noel", "Ole"]));

