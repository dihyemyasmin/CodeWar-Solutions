/*As I prepare for coding interviews, I applied the PREP method to solve a Codewars challenge, ensuring I fully understand the problem before coding.

Reason: Using PREP (Parameters, Returns, Examples, Pseudocode) helps me clarify each step.
For parameters, I asked: Will it always be a non-empty string? Are we guaranteed letters only?
For returns, I clarified: Should the function return a value or print it to the console?
Example: The challenge asked me to transform a string so each letter is repeated by its position—like "abcd" becomes "A-Bb-Ccc-Dddd."
Pseudocode: I planned a loop over each character, compute the position, format it (capitalize, repeat), and join them with dashes.

By asking these questions first and writing out the steps, I was able to confidently solve the problem in a structured way—just like I would in a real interview.

CodeWars Challenge: Create a function that provides a return like the examples below.

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

My solution:*/

function accum(str) {
 return str
 .split('') // split into an array of characters
 .map((char, index) => {
 // Create the pattern: capitalize first letter, lowercase the rest
 const formatted = char.toUpperCase() + char.toLowerCase().repeat(index);
 return formatted;
 })
 .join('-'); // join with dashes
}

// Example usage:
console.log(accum("abcd")); // Output: "A-Bb-Ccc-Dddd"