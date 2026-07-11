/*💡 A CodeWars challenge asked me to calculate the sum of the numbers in the nth row of a triangle of consecutive odd numbers. Instead of immediately searching for the solution, I practiced using the PREP method my professor taught us. 💡 

P – Parameters

What is the function given?

A single parameter: n

n represents the row number I need to calculate.

R – Return

What should the function return?

A single number: the sum of all the odd numbers in the nth row.

E – Examples

n = 1 → 1 → returns 1

n = 2 → 3 + 5 → returns 8

n = 3 → 7 + 9 + 11 → returns 27

Writing out examples helped me understand the problem before writing any code.

P – Pseudocode

Determine which odd numbers belong to row n.

Add those numbers together.

Return the total.

The biggest lesson wasn't solving the kata—it was slowing down and understanding the problem first. I'm learning that strong problem-solving skills come from asking the right questions before writing a single line of JavaScript.




#100Devs #CodeWars #JavaScript #CodingJourney #ProblemSolving #SoftwareEngineering #WebDevelopment
Solution */

function rowSumOddNumbers(n) {

 return n ** 3;

}
