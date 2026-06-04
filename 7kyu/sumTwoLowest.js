/*Solved another brain stimulating challenge on CodeWars:

Return the sum of the two lowest positive numbers from an array of positive integers.
Example:
[19, 5, 42, 2, 77] → 7

My approach:
Sort the array in ascending order using a comparison function.
The two smallest values will now be at index 0 and index 1.
Return the sum of those two values.


What I enjoyed about this challenge is that it reinforced a core concept in JavaScript​: custom sorting with callback functions. Without (a, b) => a - b, JavaScript sorts values as strings rather than numbers, which can produce unexpected results.

Every challenge is another opportunity to strengthen problem-solving skills and deepen understanding of the language.

JavaScript solution: */


function sumOfTwoLowestNumbers(numbers) {
 numbers.sort((a, b) => a - b);
 return numbers[0] + numbers[1];
}