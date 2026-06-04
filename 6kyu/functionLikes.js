/*Worked on a 6kyu Codewars 😁 JavaScript problem that simulates a social media “likes” feature, where the output message changes based on how many names are in an array. My approach was to first break down the problem by writing out each expected case (0, 1, 2, 3, and 4+ names) before coding anything. This helped me clearly understand the pattern and edge cases. I then implemented a solution using conditional statements based on array length and used string interpolation to dynamically build the correct output for each scenario. This exercise helped me strengthen my problem-solving approach by focusing on step-by-step breakdowns, handling edge cases, and improving my comfort with arrays and string formatting in JavaScript. 

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[] --> "no one likes this"
["Peter"] --> "Peter likes this"
["Jacob", "Alex"] --> "Jacob and Alex like this"
["Max", "John", "Mark"] --> "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"] --> "Alex, Jacob and 2 others like this"

SOLUTION:*/

function likes(names) {
 if (names.length === 0) {
 return "no one likes this";
 }

 if (names.length === 1) {
 return `${names[0]} likes this`;
 }

 if (names.length === 2) {
 return `${names[0]} and ${names[1]} like this`;
 }

 if (names.length === 3) {
 return `${names[0]}, ${names[1]} and ${names[2]} like this`;
 }

 return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}