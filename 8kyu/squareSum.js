/*Today's Problem in CodeWars; 
Complete the square sum function so that it squares each number passed into it and then sums the results together.

My solution was


Take aways: 
1. How do you sum transformed values in an array using .reduce()?
Use .reduce((acc, current) => acc + transformedValue, 0)

2. How do you sum the squares of numbers in an array?
arr.reduce((acc, current) => acc + current ** 2, 0)

3.In .reduce((acc, current) => ..., 0), what are:
acc
current
0

acc = running total
current = current item in array
0 = starting value */

function squareSum(arr) {
    return arr.reduce((acc, current) => {
    return acc + (current ** 2);
    }, 0);
   }
   