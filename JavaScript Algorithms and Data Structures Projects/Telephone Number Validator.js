/*
Tests
Waiting:telephoneCheck("555-555-5555") should return a boolean.
Waiting:telephoneCheck("1 555-555-5555") should return true.
Waiting:telephoneCheck("1 (555) 555-5555") should return true.
Waiting:telephoneCheck("5555555555") should return true.
Waiting:telephoneCheck("555-555-5555") should return true.
Waiting:telephoneCheck("(555)555-5555") should return true.
Waiting:telephoneCheck("1(555)555-5555") should return true.
Waiting:telephoneCheck("555-5555") should return false.
Waiting:telephoneCheck("5555555") should return false.
Waiting:telephoneCheck("1 555)555-5555") should return false.
Waiting:telephoneCheck("1 555 555 5555") should return true.
Waiting:telephoneCheck("1 456 789 4444") should return true.
Waiting:telephoneCheck("123**&!!asdf#") should return false.
Waiting:telephoneCheck("55555555") should return false.
Waiting:telephoneCheck("(6054756961)") should return false.
Waiting:telephoneCheck("2 (757) 622-7382") should return false.
Waiting:telephoneCheck("0 (757) 622-7382") should return false.
Waiting:telephoneCheck("-1 (757) 622-7382") should return false.
Waiting:telephoneCheck("2 757 622-7382") should return false.
Waiting:telephoneCheck("10 (757) 622-7382") should return false.
Waiting:telephoneCheck("27576227382") should return false.
Waiting:telephoneCheck("(275)76227382") should return false.
Waiting:telephoneCheck("2(757)6227382") should return false.
Waiting:telephoneCheck("2(757)622-7382") should return false.
Waiting:telephoneCheck("555)-555-5555") should return false.
Waiting:telephoneCheck("(555-555-5555") should return false.
Waiting:telephoneCheck("(555)5(55?)-5555") should return false.
Waiting:telephoneCheck("55 55-55-555-5") should return false.
Waiting:telephoneCheck("11 555-555-5555") should return false.
 */
function telephoneCheck(str) {
  // Define a regular expression pattern to match valid phone numbers
  const pattern = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

  // Test the input string against the pattern
  return pattern.test(str);
}

console.log(telephoneCheck("555-555-5555")); // Should return true
console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("1(555)555-5555"));
console.log(telephoneCheck("555-5555"));
console.log(telephoneCheck("5555555"));
console.log(telephoneCheck("1 555)555-5555"));
console.log(telephoneCheck("1 555 555 5555"));
