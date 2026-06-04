/*I recently worked through a problem where I had to rearrange the digits of a non-negative integer to create the highest possible number.

Problem:
Given a number, return it with its digits sorted in descending order.

My Approach:
At first, I converted the number to a string, split it into an array, and used .sort(). However, I realized that JavaScript’s default .sort() method sorts values as strings (lexicographically), which can lead to incorrect results.
To fix this, I used a custom compare function:

sort((a, b) => b - a)

This ensures the digits are sorted numerically in descending order.
Final Solution:


Key Takeaway:
 Understanding how .sort() behaves by default is crucial—especially when working with numbers stored as strings.*/


 function descendingOrder(n) {
    return Number(n.toString().split('').sort((a, b) => b - a).join(''));
   }
   