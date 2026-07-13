/***🚨 I spent WAY longer on a 7 KYU Codewars problem than I expected... and that was the lesson.**

Today I worked on a Codewars challenge that asked me to combine two strings, remove duplicate letters, sort them alphabetically, and return the result.

At first, I misunderstood the problem.

I thought I needed to compare the two strings separately, so my initial plan involved creating two arrays and figuring out which string contained the most distinct letters. After rereading the prompt and talking through my thought process, I realized the challenge wasn't asking me to compare the strings at all—it was asking me to treat them as one collection of letters.

That completely changed how I approached the solution.

Instead of thinking about two separate inputs, I started thinking in simple steps:

* Combine both strings.
* Remove duplicate letters.
* Sort alphabetically.
* Join everything back into one string.
* Return the result.



The biggest takeaway wasn't the code—it was realizing that slowing down to fully understand the prompt saves more time than rushing into coding.

Every Codewars challenge reminds me that becoming a software engineer isn't just about memorizing JavaScript methods. It's about improving how I analyze problems, break them into smaller steps, and translate those steps into code.

One challenge at a time. 💻🚀

#100Devs #Codewars #JavaScript #WebDevelopment #SoftwareEngineering #CodingJourney #LearnInPublic #FullStackDeveloper
Here's the final solution:

javascript*/
function longest(s1, s2) {
  return [...new Set(s1 + s2)]
    .sort()
    .join("");
}
