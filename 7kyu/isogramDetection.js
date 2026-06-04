/*🚀Problem solved ✅
Completed another Codewars JavaScript challenge: 
Isogram Detection 🔤
I built a function that checks whether a word contains duplicate letters while ignoring uppercase and lowercase differences.
Problem:
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.


Key concepts I practiced:
 • toLowerCase()
 • includes()
 • Arrays and loops
 • Conditional logic
 • Detecting duplicates in strings
This challenge helped me better understand how to track values and break problems into smaller logical steps 💻🔥

Solution: */
function isIsogram(str) {
 str = str.toLowerCase()
 let seen = []
 for (let letter of str) {
 if (seen.includes(letter)) {
 return false
 }
 seen.push(letter)
 }
 return true
}