/*
8 💻 Solved another JavaScript CodeWars challenge today: **Unique In Order**

### The Challenge

Given a string or array, return a new array with consecutive duplicate values removed while preserving the original order.

Examples:

```javascript
uniqueInOrder('AAAABBBCCDAABBB')
// ['A', 'B', 'C', 'D', 'A', 'B']

uniqueInOrder([1,2,2,3,3])
// [1,2,3]
```

### My Approach

I used a loop to iterate through the sequence and compared each element to the one before it.

If the current value was different from the previous value, I added it to a new array. If it was the same, I skipped it.

### What I Reinforced

✅ Working with arrays and strings through indexing

✅ Understanding how to compare current and previous values

✅ Using loops to solve algorithmic problems

✅ Thinking about data transformation while preserving order

One thing I enjoy about CodeWars is seeing how many different solutions can solve the same problem. Some developers use loops, others use `filter()`, and some use more advanced JavaScript techniques. It's a great reminder that programming is often about finding multiple valid paths to the same result.

#JavaScript #CodeWars #WebDevelopment #CodingBootcamp #100DaysOfCode #SoftwareEngineering #FrontendDevelopment #Programming


## Solution

javascript*/

var uniqueInOrder = function(iterable) {
  let result = [];

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i - 1]) {
      result.push(iterable[i]);
    }
  }

  return result;
};