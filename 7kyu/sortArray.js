/*Technical interviews aren't just about coding—they're about how you think through a problem.
Today I practiced a JavaScript challenge on CodeWars and used the PREP Method (Parameters, Return, Example, Pseudocode) to structure my solution before writing any code.

Problem
Finish the solution so that it sorts the passed-in array of numbers. If the function receives an empty array or null, return an empty array.

P - Parameters
Before coding, I would ask an interviewer:
Will the input always be an array?
Can the array contain negative numbers?
Can it contain zeros?
Will it contain only numbers?
Can the input be null?

R - Return
Should I return a sorted array or print it to the console?
If the array is empty or null, should I return an empty array?

E - Example

solution([3, 1, 2]);
// returns [1, 2, 3]

solution([]);
// returns []

solution(null);
// returns []

P - Pseudocode
If array is null or empty
    return []

Sort the array from smallest to largest

Return the sorted array

JavaScript Solution


Working through problems with PREP helps me slow down, understand the requirements, and communicate my thought process more effectively—an important skill for both coding challenges and technical interviews.
#JavaScript #CodeWars #SoftwareEngineering #WebDevelopment #CodingJourney #100DaysOfCode #ProblemSolving #TechInterviewPrep*/
function solution(nums) {
    if (!nums || nums.length === 0) {
      return [];
    }
  
    return nums.sort((a, b) => a - b);
  }
  