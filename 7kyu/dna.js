/*As I continue preparing for software engineering interviews, I used the PREP method (Parameters, Returns, Examples, Pseudocode) to solve a Codewars challenge involving DNA base pairs.

🧠 Challenge: Given one side of a DNA strand, return its complementary strand.

DNA pairing rules:

* A ↔ T
* C ↔ G

Why PREP?

Breaking the problem down before coding helps me think more clearly and approach challenges like I would in a real interview.

**Parameters:** Will the input always be a non-empty string? Will it only contain the characters A, T, C, and G?

**Returns:** Should the function return a new string representing the complementary DNA strand?

**Examples:**

* "ATTGC" → "TAACG"
* "GTAT" → "CATA"

**Pseudocode:**

1. Create a lookup object for DNA pairs.
2. Loop through each character in the string.
3. Replace each character with its complement.
4. Join the results into a new string.


Using a lookup object kept the solution simple, readable, and easy to scale.

What problem-solving framework do you use before writing code?

#JavaScript #Codewars #ProblemSolving #InterviewPrep #WebDevelopment #SoftwareEngineering


My solution:

*/
function dnaStrand(dna) {
  const pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  };

  return dna
    .split('')
    .map(base => pairs[base])
    .join('');
}
