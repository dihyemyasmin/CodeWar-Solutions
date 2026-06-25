/*Breaking Down a CodeWars Challenge Using the PREP Method

Today, I worked on a CodeWars challenge and used the PREP method (Parameters, Return, Example, Pseudocode) to break down my approach. Here’s how I tackled it:

P (Parameters):
First, I asked: Does the input string contain only letters? For this problem, I needed to ensure no symbols or spaces would cause issues. So, I confirmed the input is a clean string of letters.

R (Return):
I defined the return. I needed to return the positions of each letter in the alphabet. For example, 'a' is 1, 'b' is 2, 'c' is 3, and so forth. I planned to return an array of these positions.

E (Example):
Let’s look at an example. If the input is "the", we’d map 't' to 20, 'h' to 8, and 'e' to 5. So, the output would be [20, 8, 5].

P (Pseudocode):
Here’s how I structured it:

Convert the string to lowercase to ensure consistency.
Split the string into individual characters.
Loop through each character, find its position by subtracting 'a' from it and adding 1.
Store each position in an array.
Return the array.

Now, here’s the code:



// Example usage:
console.log(alphabetPosition("the")); // [20, 8, 5]

By structuring the problem with the PREP method, I was able to clarify the steps, ensure my assumptions, and keep my solution organized. This method is super helpful for any problem-solving scenario, especially in interviews, because it forces you to think about edge cases and structure.*/
function alphabetPosition(text) {
    return text
      .toLowerCase()
      .split('')
      .filter(char => char >= 'a' && char <= 'z') // ensure only letters
      .map(char => char.charCodeAt(0) - 96); // 'a' is 97 in ASCII, so we adjust
  }