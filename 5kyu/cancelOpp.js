/*🚀 How I Simplified a "Stack" Problem Using PREP (Parameters, Return, Examples, Pseudocode)! 🚀

In my coding journey, I faced a tricky array reduction problem: removing opposite directions from a path. Here’s how I broke it down using the PREP method:

🔹 P (Parameters): I took an array of direction strings (like ["NORTH", "SOUTH", "EAST", "WEST"]) and aimed to reduce it by removing opposite pairs.

🔹 R (Return): The return is a simplified array of directions, with all immediate opposite pairs removed.

🔹 E (Examples): For instance, ["NORTH", "SOUTH"] reduces to [], and ["NORTH", "WEST", "SOUTH", "EAST"] stays as is since no immediate pairs cancel.

🔹 P (Pseudocode):

Create an empty stack.
Loop through each direction.
If the stack top is the opposite, pop it; otherwise, push the direction.
Return the stack.

With this stack pattern, we saved hours of debugging! If you're prepping for interviews or just love solving puzzles, this approach is gold. What’s a tricky problem you’ve simplified lately? Let’s discuss! #CodingTips #StackAlgorithm #InterviewPrep #ProblemSolving #JavaScript #PREPMethod
function dirReduc(arr) {
  // Step 1: Define opposite directions
  const opposite = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST"
  };

  // Step 2: Initialize an empty stack
  const stack = [];

  // Step 3: Iterate over each direction
  for (const dir of arr) {
    const last = stack[stack.length - 1];

    // Step 4: If the current direction is opposite of the last, pop it (cancel out)
    if (opposite[dir] === last) {
      stack.pop();
    } else {
      // Otherwise, push the current direction
      stack.push(dir);
    }
  }

  // Step 5: Return the reduced path
  return stack;
}*/

function dirReduc(arr) {
    const opposite = {
      NORTH: "SOUTH",
      SOUTH: "NORTH",
      EAST: "WEST",
      WEST: "EAST"
    };
  
    const stack = [];
  
    for (const dir of arr) {
      const last = stack[stack.length - 1];
  
      if (opposite[dir] === last) {
        stack.pop();
      } else {
        stack.push(dir);
      }
    }
  
    return stack;
  }