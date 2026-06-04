/* 💡 Codewars Challenge (6 kyu): Find the integer that appears an odd number of times
I recently worked through a problem where I needed to identify the single integer in an array that appears an odd number of times.
🧠 Approach:
I started by breaking the problem down into two steps:
Count how many times each number appears using an object
Iterate through those counts and return the number whose frequency is not divisible by 2
This helped reinforce my understanding of:
Frequency counting with objects
Iterating over key-value pairs
Applying the modulo operator in a practical way
⚡ Optimization:
After solving it, I explored a more efficient solution using the XOR bitwise operator. This approach eliminates the need for extra space and leverages the property that duplicate values cancel each other out.
📈 It was a great exercise in thinking beyond the first working solution and refining it for performance. 

Solution:

reduce loops through the array
acc = running result
num = current number
^ = XOR (bitwise operator)

a ^ a = 0 → same numbers cancel out
a ^ 0 = a → number stays the same
Order doesn’t matter*/

function findOdd(A) {
    return A.reduce((acc, num) => acc ^ num, 0);
   }