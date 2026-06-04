/*Just solved a fun JavaScript problem involving camel case string formatting.

The challenge:
Take a camelCased string and insert spaces before capital letters.

Example:
 "camelCasing" → "camel Casing"

What I practiced:
String traversal
Conditional logic
Understanding uppercase detection in JavaScript
Writing cleaner beginner-friendly logic without advanced methods

One thing I’m realizing while learning full stack development is that small coding exercises build pattern recognition fast. Every problem strengthens problem-solving skills a little more.*/


function solution(string) {
 let result = "";

 for (let i = 0; i < string.length; i++) {
 if (string[i] === string[i].toUpperCase() && string[i] !== string[i].toLowerCase()) {
 result += " ";
 }

 result += string[i];
 }

 return result;
}