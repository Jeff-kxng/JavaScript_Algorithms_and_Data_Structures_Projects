/*
Tests
Waiting:The users object should only contain the keys Alan, Jeff, Sarah, and Ryan
Waiting:The getArrayOfUsers function should return an array which contains all the keys in the users object
 */
function getArrayOfUsers(obj) {
  return Object.keys(obj);
}

const users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

console.log(getArrayOfUsers(users));
