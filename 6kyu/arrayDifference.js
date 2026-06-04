/* Today I solved the Array Difference kata in JavaScript.
The challenge was to remove all values from one array that existed in another array while preserving the original order.

My first step was breaking the problem into plain English:
loop through the first array
check whether each value exists in the second array
keep only the values that don’t exist in the second array

This helped me recognize that .filter() was the right tool because the problem focused on removing elements based on a condition, not transforming data.
I combined .filter() with .includes() to create a concise solution:


This exercise strengthened my understanding of:
array iteration
filtering logic
boolean conditions
when to use .filter() vs .map() */

function arrayDiff(a, b) {
    return a.filter(item => !b.includes(item))
   }
   