/*
Tests
Waiting:spreadOut should return ["learning", "to", "code", "is", "fun"]
Waiting:The spreadOut function should utilize spread syntax
 */

function spreadOut(){
  var sentence = ['learning', 'to', ...['code', 'is', 'fun']];
  return sentence;
}

console.log(spreadOut());
