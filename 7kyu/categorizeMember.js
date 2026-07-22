/*🚀 The difference between struggling with a coding problem and solving it starts with one thing: having a process.

Here's another JavaScript CodeWars challenge using the PREP method to organize my thoughts before writing code.



🧩 P — Parameters

The function receives an array of members.

Each member is represented by another array containing two integers:

The person's age

The person's handicap level

Example:

[61, 12]

means:

Age: 61

Handicap: 12



🔄 R — Returns

The function should return an array of strings.

Each string should be either:

"Senior"

"Open"

A member is classified as Senior when:

Age is 55 or older

Handicap is greater than 7

If those conditions are not met, the member is classified as Open.



🧪 E — Examples

Given:

[

 [18,20],

 [45,2],

 [61,12],

 [37,6],

 [21,21],

 [78,9]

]

The expected output is:

[

 "Open",

 "Open",

 "Senior",

 "Open",

 "Open",

 "Senior"

]

Breaking down the examples helped me understand the pattern and confirm my logic before coding.



✍️ P — Pseudocode

Before writing JavaScript, I created a simple plan:

Create an empty results array.

Loop through each member.

Get the age and handicap values.

Check if age is greater than or equal to 55 AND handicap is greater than 7.

If true, add "Senior" to the results.

Otherwise, add "Open".

Return the results array.

After creating the pseudocode, writing the JavaScript solution became much clearer.

The biggest lesson from this challenge: good developers don't just write code — they develop a process for solving problems.

PREP helps me slow down, understand the requirements, and approach coding challenges with confidence.

One problem at a time. One solution at a time. 💻🚀

What process do you use before starting a coding challenge?

#JavaScript #CodeWars #PREPMethod #ProblemSolving #SoftwareEngineering #WebDevelopment #FrontendDeveloper #CodingJourney #100Devs #LearnToCode #DeveloperJourney*/
function openOrSenior(data) {
    const result = [];
  
    for (const person of data) {
      const age = person[0];
      const handicap = person[1];
  
      if (age >= 55 && handicap > 7) {
        result.push("Senior");
      } else {
        result.push("Open");
      }
    }
  
    return result;
  };