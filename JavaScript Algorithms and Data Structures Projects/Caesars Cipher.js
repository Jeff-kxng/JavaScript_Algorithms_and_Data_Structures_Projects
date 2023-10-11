/*
Tests
Waiting:rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP
Waiting:rot13("SERR CVMMN!") should decode to the string FREE PIZZA!
Waiting:rot13("SERR YBIR?") should decode to the string FREE LOVE?
Waiting:rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
 */

function rot13(str) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const decodeMap = {};

  for (let i = 0; i < 26; i++) {
    const index = (i + 13) % 26;
    decodeMap[alphabet[i]] = alphabet[index];
  }

  const decodedStr = str.replace(/[A-Z]/g, (match) => decodeMap[match]);

  return decodedStr;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
