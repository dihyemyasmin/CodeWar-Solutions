/*Worked through a 6 kyu challenge on Codewars challenge that focused on string manipulation and duplicate detection in JavaScript.

The challenge:
 Convert a string into:
"(" if a character appears once
")" if it appears multiple times
while ignoring capitalization

What I practiced:
.map()
.indexOf()
.lastIndexOf()

One thing I’m starting to understand more deeply is how important problem breakdowns are before writing code.

Instead of jumping straight into the solution, I broke it into steps:
Normalize the string with lowercase
Loop through each character
Check if the first and last index match
Return the correct symbol
Join everything back together


Small challenge, but good practice for writing cleaner logic and improving problem-solving skills.

Solution */
 
function duplicateEncode(word){
 word = word.toLowerCase()

 return word
 .split('')
 .map(char => {
 return word.indexOf(char) === word.lastIndexOf(char)
 ? '('
 : ')'
 })
 .join('')
}