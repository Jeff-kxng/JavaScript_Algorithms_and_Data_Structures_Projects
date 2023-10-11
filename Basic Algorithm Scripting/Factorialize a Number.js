/*
Tests
Waiting:factorialize(5) should return a number.
Waiting:factorialize(5) should return 120.
Waiting:factorialize(10) should return 3628800.
Waiting:factorialize(20) should return 2432902008176640000.
Waiting:factorialize(0) should return 1.
 */
function factorialize(number){
  if (number == 0 || number == 1){
    return 1;
  }
  else {
    let result = 1;
    for (let i = 2; i <= number; i++){
      result *= i;
    }
    return result;
  }
}
console.log(factorialize(5));
console.log(factorialize(10));
console.log(factorialize(20));
console.log(factorialize(0));
