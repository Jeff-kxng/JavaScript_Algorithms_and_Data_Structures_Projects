/*
Tests
Waiting:The function countOnline should use a for in statement to iterate through the object keys of the object passed to it.
Waiting:The function countOnline should return 1 when the object { Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } } is passed to it
Waiting:The function countOnline should return 2 when the object { Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } } is passed to it
Waiting:The function countOnline should return 0 when the object { Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } } is passed to it
 */
function countOnline(allUsers) {
  let count = 0;
  for (const user in allUsers) {
    if (allUsers[user].online === true) {
      count++;
    }
  }
  return count;
}

const users1 = {
  Alan: { online: false },
  Jeff: { online: true },
  Sarah: { online: false },
};

const users2 = {
  Alan: { online: true },
  Jeff: { online: false },
  Sarah: { online: true },
};

const users3 = {
  Alan: { online: false },
  Jeff: { online: false },
  Sarah: { online: false },
};

console.log(countOnline(users1)); // Output: 1
console.log(countOnline(users2)); // Output: 2
console.log(countOnline(users3)); // Output: 0
