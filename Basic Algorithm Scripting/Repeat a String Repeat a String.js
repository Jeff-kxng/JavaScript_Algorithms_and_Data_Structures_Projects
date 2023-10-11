/*
Tests
Waiting:repeatStringNumTimes("*", 3) should return the string ***.
Waiting:repeatStringNumTimes("abc", 3) should return the string abcabcabc.
Waiting:repeatStringNumTimes("abc", 4) should return the string abcabcabcabc.
Waiting:repeatStringNumTimes("abc", 1) should return the string abc.
Waiting:repeatStringNumTimes("*", 8) should return the string ********.
Waiting:repeatStringNumTimes("abc", -2) should return an empty string ("").
Waiting:The built-in repeat() method should not be used.
Waiting:repeatStringNumTimes("abc", 0) should return "".
 */

function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  }

  let repeatedString = "";
  for (let i = 0; i < num; i++) {
    repeatedString += str;
  }

  return repeatedString;
}

console.log(repeatStringNumTimes("*", 3));
console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", 4));
console.log(repeatStringNumTimes("abc", 1));
console.log(repeatStringNumTimes("*", 8));
console.log(repeatStringNumTimes("abc", -2));
console.log(repeatStringNumTimes("abc", 0));
