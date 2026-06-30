/*I almost overcomplicated this CodeWars problem... the solution ended up being much simpler than I expected.Today's CodeWars Challenge: Valid Walk (6 kyu)**

PREP method- before writing any code:

✅ **Parameters:** An array of directions (`'n'`, `'s'`, `'e'`, `'w'`)

✅ **Returns:** `true` only if the walk lasts exactly 10 minutes **and** returns to the starting point; otherwise `false`

✅ **Example:** I verified that the number of north moves equals south moves, east equals west, and the array length is exactly 10.

✅ **Pseudocode:** Before touching JavaScript, I outlined the steps:

* Check that the array length is 10.
* Count each direction.
* Compare opposite directions.
* Return whether both pairs are balanced.

Once the logic was clear, the implementation became straightforward.

One thing I'm noticing as I solve more problems: spending a few minutes planning with PREP often saves much more time debugging later.

Every challenge is another opportunity to strengthen problem-solving—not just syntax.

#JavaScript #CodeWars #100DaysOfCode #WebDevelopment #SoftwareEngineering #ProblemSolving #CodingJourney #FrontendDeveloper #LearnToCode


CodeWars Challenge:
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Solution:
*/

function isValidWalk(walk) {
    if (walk.length !== 10) return false;
  
    let north = 0;
    let south = 0;
    let east = 0;
    let west = 0;
  
    for (const direction of walk) {
      if (direction === "n") north++;
      if (direction === "s") south++;
      if (direction === "e") east++;
      if (direction === "w") west++;
    }
  
    return north === south && east === west;
  }
