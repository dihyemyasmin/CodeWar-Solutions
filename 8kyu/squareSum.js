/*Today's Problem in CodeWars; 
Complete the square sum function so that it squares each number passed into it and then sums the results together.


P (Parameters): What inputs does your function need? 
R (Return): What should the function produce? Here, it should return a single number, which is the sum of all the
squared numbers.
E (Examples): Think of input and output examples to guide you. For instance:
Input: [3, 4]
Output: 25 (since 3² + 4² = 25)
P (Pseudocode): Write out the logic in plain steps. For example:
Loop through each number in the array.
Square the current number.
Add that square to sum.
After the loop, return sum.

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
0 = starting value 
My solution was*/

function squareSum(arr) {
    return arr.reduce((acc, current) => {
    return acc + (current ** 2);
    }, 0);
   }
   