/*Stop jumping straight into code—start with PREP. I used the Parameters, Returns, Examples, and Pseudocode framework to solve the Pangram challenge on Codewars.

Instead of jumping straight into coding, I first clarified the problem:
• Parameters: The input is a string that may contain uppercase letters, numbers, spaces, and punctuation.
• Returns: The function should return a boolean (true or false), not print the result.
• Examples: I tested both pangrams and non-pangrams to verify edge cases.
• Pseudocode: Convert the string to lowercase, collect unique letters in a Set, ignore non-letter characters, and check whether all 26 letters are present.

Using PREP helped me break down the problem logically and write a clean O(n) solution.

Key takeaway: Spending a few minutes understanding the problem saves time debugging later.

CodeWars Problem: A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


}#Codewars #JavaScript #CodingChallenge #100DaysOfCode #WebDevelopment #SoftwareEngineering #ProblemSolving
My solution:*/
function isPangram(str) {
 const letters = new Set();

 for (const char of str.toLowerCase()) {
  if (char >= "a" && char <= "z") {
   letters.add(char);
  }
 }

 return letters.size === 26;}