/*
Tests
Waiting:The user object should have name, age, and data keys.
Waiting:The addFriend function should accept a user object and a friend string as arguments and add the friend to the array of friends in the user object.
Waiting:addFriend(user, "Pete") should return ["Sam", "Kira", "Tomo", "Pete"].
 */
function addFriend(user, friend) {
  user.data.friends.push(friend);
  return user.data.friends;
}

const user = {
  name: 'Sam',
  age: 30,
  data: {
    username: 'sammy',
    joinDate: 'January 1, 2020',
    friends: ['Kira', 'Tomo'],
  },
};

console.log(addFriend(user, 'Pete'));
