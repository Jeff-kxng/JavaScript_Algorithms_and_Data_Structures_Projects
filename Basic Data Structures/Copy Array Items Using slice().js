/*
Tests
Waiting:forecast should return ["warm", "sunny"]
Waiting:The forecast function should utilize the slice() method
 */
function forecast(array){
  // Use slice to extract elements from the argument array

  return array.slice(2, 4);
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool']));
