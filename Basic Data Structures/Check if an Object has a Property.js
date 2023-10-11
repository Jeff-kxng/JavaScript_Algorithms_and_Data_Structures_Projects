/*
Tests
Waiting:The users object should not be accessed directly
Waiting:The users object should only contain the keys Alan, Jeff, Sarah, and Ryan
Waiting:The function isEveryoneHere should return true if Alan, Jeff, Sarah, and Ryan are properties on the object passed to it.
Waiting:The function isEveryoneHere should return false if Alan is not a property on the object passed to it.
Waiting:The function isEveryoneHere should return false if Jeff is not a property on the object passed to it.
Waiting:The function isEveryoneHere should return false if Sarah is not a property on the object passed to it.
Waiting:The function isEveryoneHere should return false if Ryan is not a property on the object passed to it.
 */

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  return (
    'Alan' in userObj &&
    'Jeff' in userObj &&
    'Sarah' in userObj &&
    'Ryan' in userObj
  );
}

console.log(isEveryoneHere(users));
