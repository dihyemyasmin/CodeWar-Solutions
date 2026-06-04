/*🧠 Codewars 7kyu Challenge – Finding the Middle Character(s) in a String
Problem:
 Given a non-empty string, return the middle character(s) of the string.
If the length of the string is odd, return the single middle character.
If the length is even, return the two middle characters.


💡 My Thought Process:
I focused on the key steps:
Getting the string length using s.length,
Determining if it’s even or odd using s.length % 2 === 0, 
Finding the middle index using Math.floor(s.length / 2),
Using slice() to extract the correct portion of the string.

The tricky part was realizing that:
For odd lengths, I only need the exact middle index
For even lengths, I need (middle - 1) to (middle + 1)



📌 What I learned:
String indexing and slicing in JavaScript
Handling edge cases (even vs odd lengths)
Breaking a problem into smaller logical conditions
Using % operator for parity checks */

function getMiddle(s) {
    const even = s.length % 2 === 0;
    const middle = Math.floor(s.length / 2);
   
    if (even) {
    return s.slice(middle - 1, middle + 1);
    } else {
    return s.slice(middle, middle + 1);
    }
   }