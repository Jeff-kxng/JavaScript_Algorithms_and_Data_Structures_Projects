/*
Tests
Waiting:convertToRoman(2) should return the string II.
Waiting:convertToRoman(3) should return the string III.
Waiting:convertToRoman(4) should return the string IV.
Waiting:convertToRoman(5) should return the string V.
Waiting:convertToRoman(9) should return the string IX.
Waiting:convertToRoman(12) should return the string XII.
Waiting:convertToRoman(16) should return the string XVI.
Waiting:convertToRoman(29) should return the string XXIX.
Waiting:convertToRoman(44) should return the string XLIV.
Waiting:convertToRoman(45) should return the string XLV.
Waiting:convertToRoman(68) should return the string LXVIII
Waiting:convertToRoman(83) should return the string LXXXIII
Waiting:convertToRoman(97) should return the string XCVII
Waiting:convertToRoman(99) should return the string XCIX
Waiting:convertToRoman(400) should return the string CD
Waiting:convertToRoman(500) should return the string D
Waiting:convertToRoman(501) should return the string DI
Waiting:convertToRoman(649) should return the string DCXLIX
Waiting:convertToRoman(798) should return the string DCCXCVIII
Waiting:convertToRoman(891) should return the string DCCCXCI
Waiting:convertToRoman(1000) should return the string M
Waiting:convertToRoman(1004) should return the string MIV
Waiting:convertToRoman(1006) should return the string MVI
Waiting:convertToRoman(1023) should return the string MXXIII
Waiting:convertToRoman(2014) should return the string MMXIV
Waiting:convertToRoman(3999) should return the string MMMCMXCIX
 */
function convertToRoman(num) {
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = '';

  for (let key in romanNumerals) {
    while (num >= romanNumerals[key]) {
      result += key;
      num -= romanNumerals[key];
    }
  }

  return result;
}

console.log(convertToRoman(2));  // Should return "II"
console.log(convertToRoman(3));  // Should return "III"
console.log(convertToRoman(4));  // Should return "IV"
console.log(convertToRoman(5));  // Should return "V"
console.log(convertToRoman(9));  // Should return "IX"
console.log(convertToRoman(12));  // Should return "XII"
console.log(convertToRoman(16));  // Should return "XVI"
console.log(convertToRoman(29));  // Should return "XXIX"
console.log(convertToRoman(44));  // Should return "XLIV"
console.log(convertToRoman(45));  // Should return "XLV"
console.log(convertToRoman(68));  // Should return "LXVIII"
console.log(convertToRoman(83));  // Should return "LXXXIII"
console.log(convertToRoman(97));  // Should return "XCVII"
console.log(convertToRoman(99));  // Should return "XCIX"
console.log(convertToRoman(400));  // Should return "CD"
console.log(convertToRoman(500));  // Should return "D"
console.log(convertToRoman(501));  // Should return "DI"
console.log(convertToRoman(649));  // Should return "DCXLIX"
console.log(convertToRoman(798));  // Should return "DCCXCVIII"
console.log(convertToRoman(891));  // Should return "DCCCXCI"
console.log(convertToRoman(1000));  // Should return "M"
console.log(convertToRoman(1004));  // Should return "MIV"
console.log(convertToRoman(1006));  // Should return "MVI"
console.log(convertToRoman(1023));  // Should return "MXXIII"
console.log(convertToRoman(2014));  // Should return "MMXIV"
console.log(convertToRoman(3999));  // Should return "MMMCMXCIX"
