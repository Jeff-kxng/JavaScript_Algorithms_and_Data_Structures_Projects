/*
Tests
Waiting:booWho(true) should return true.
Waiting:booWho(false) should return true.
Waiting:booWho([1, 2, 3]) should return false.
Waiting:booWho([].slice) should return false.
Waiting:booWho({ "a": 1 }) should return false.
Waiting:booWho(1) should return false.
Waiting:booWho(NaN) should return false.
Waiting:booWho("a") should return false.
Waiting:booWho("true") should return false.
Waiting:booWho("false") should return false.
 */
function booWho(bool) {
  return typeof bool === "boolean";
}

console.log(booWho(true));
console.log(booWho(false));
console.log(booWho([1, 2, 3]));
console.log(booWho([].slice));
console.log(booWho({ "a": 1 }));
console.log(booWho(1));
console.log(booWho(NaN));
console.log(booWho("a"));
console.log(booWho("true"));
console.log(booWho("false"));

