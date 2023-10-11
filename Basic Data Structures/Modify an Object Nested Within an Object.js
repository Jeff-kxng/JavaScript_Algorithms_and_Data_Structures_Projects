/*
Tests
Waiting:userActivity should have id, date and data properties.
Waiting:userActivity should have a data key set to an object with keys totalUsers and online.
Waiting:The online property nested in the data key of userActivity should be set to 45
Waiting:The online property should be set using dot or bracket notation.
 */

let userActivity = {
  id :  23894201352,
  date : 'January 1, 2017',
  data : {
    totalUsers : 51,
    online : 42
  }
};

userActivity.data.online = 45;

console.log(userActivity);
