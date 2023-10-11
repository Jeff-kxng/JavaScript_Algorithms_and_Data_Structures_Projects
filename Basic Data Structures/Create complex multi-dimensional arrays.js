/*
Tests
Waiting:myNestedArray should contain only numbers, booleans, and strings as data elements
Waiting:myNestedArray should have exactly 5 levels of depth
Waiting:myNestedArray should contain exactly one occurrence of the string deep on an array nested 3 levels deep
Waiting:myNestedArray should contain exactly one occurrence of the string deeper on an array nested 4 levels deep
Waiting:myNestedArray should contain exactly one occurrence of the string deepest on an array nested 5 levels deep
 */

let myNestedArray = [
  // Level 1
  [
    // Level 2
    [
      // Level 3
      "deep",
      [
        // Level 4
        "deeper",
        [
          // Level 5
          "deepest"
        ]
      ]
    ]
  ]
];

