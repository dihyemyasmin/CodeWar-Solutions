/*Highest and Lowest (7kyu).
Problem:
Given a string of space-separated numbers, return the highest and lowest values as a string, with the highest number first.


My Thought Process:
I first recognized that the input was a string, so I needed to transform it into something easier to work with.
Used split(" ") to separate the values into an array.
Used map(Number) to convert each string value into actual numbers.
Used the spread operator with Math.max() and Math.min() to find the largest and smallest values.
Returned the result using a template literal in the required format.


Solution:


What I reinforced today:
String to array conversion with split()
Data type conversion with map(Number)
Spread operator usage
Problem decomposition before coding
Small daily wins compound into stronger problem-solving skills.*/

function highAndLow(numbers) {
    const nums = numbers.split(" ").map(Number);
    return `${Math.max(...nums)} ${Math.min(...nums)}`;
   }
   