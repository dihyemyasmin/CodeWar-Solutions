/*Solved another JavaScript CodeWars challenge today 💻
The challenge was to sort only the odd numbers in an array while keeping the even numbers in their original positions.

My approach:
Extract all odd numbers using filter()
Sort the odd numbers in ascending order
Use map() to rebuild the array
Replace only the odd positions while leaving evens untouched


This challenge helped reinforce:
Array methods (filter, sort, map)


functionsortArray(array) {
// Step 1: Extract odd numbers and sort them
letodds=array.filter(num => num%2!==0).sort((a, b) => a-b);

// Step 2: Use a map to rebuild the array
letoddIndex=0;
returnarray.map(num => {
if (num%2!==0) {
// If it's odd, use the next odd from the sorted list
returnodds[oddIndex++];
 } else {
// If it’s even, keep it as is
returnnum;
 }
 });
}
Small challenges like this are helping me become more comfortable thinking through real programming logic step by step.*/

function sortArray(array) {
    let odds = array
      .filter(num => num % 2 !== 0)
      .sort((a, b) => a - b);
  
    let oddIndex = 0;
  
    return array.map(num => {
      if (num % 2 !== 0) {
        return odds[oddIndex++];
      }
      return num;
    });
  }