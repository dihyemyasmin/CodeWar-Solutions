/*🚀 Solved the "Build Tower" challenge on Codewars today.
The goal was to generate a pyramid-shaped tower using * characters and return it as an array of strings.





My thought process was
1. Break the problem into individual floors rather than thinking about the entire tower.

2. Notice the pattern in the number of stars:
 1, 3, 5, 7...
This can be represented with the formula:

(i * 2) + 1

3. Calculate the spaces needed on each side to keep the tower centered:

nFloors - i - 1

4. Build each floor and push it into an array.
This challenge was a great reminder that many programming problems become much simpler once you identify the underlying pattern and focus on building the solution incrementally. 


Solution: */

function towerBuilder(nFloors) {
 const tower = [];

 for (let i = 0; i < nFloors; i++) {
 const spaces = ' '.repeat(nFloors - i - 1);
 const stars = '*'.repeat(i * 2 + 1);

 tower.push(spaces + stars + spaces);
 }

 return tower;
}