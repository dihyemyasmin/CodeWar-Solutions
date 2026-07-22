/*🚨 One of the biggest mistakes new developers make isn't writing bad code—it's skipping the planning phase.

I used to look at coding problems and immediately think, "I have no idea where to start." The solution usually wasn't learning another JavaScript method—it was learning how to think.

Let's do a challenge together:

A town starts with a population of p0. Every year, the population grows by a given percentage, plus a fixed number of people move in (or out). Your task is to determine how many full years it takes for the population to reach or exceed a target population.

Instead of jumping straight into code, I use the PREP Method to break the problem down.

🟢 P — Parameters

What information does the function receive?

p0 → Starting population

percent → Annual growth percentage

aug → Number of people moving in (or out) each year

p → Target population

🔵 R — Return

What should the function return?

Not a console.log().

Return an integer representing the number of full years required for the population to become greater than or equal to the target population.

🟡 E — Example

nb_year(1000, 2, 50, 1200)

Year 1 → 1070

Year 2 → 1141

Year 3 → 1213

✅ Return 3

Walking through an example often reveals the pattern before you write a single line of code.

🔴 P — Pseudocode

Create a variable for the current population.

Create a variable to count the years.



While the current population is less than the target:

    Increase the population by the yearly percentage.

    Add the yearly migration amount.

    Round the population down.

    Increment the year counter.



Return the number of years.

Once the pseudocode is clear, the JavaScript almost writes itself.



The biggest lesson here isn't the while loop.

It's that good programmers don't just write code—they create a plan before they code.

The PREP Method forces you to understand the problem first, and that's often the difference between staring at a blank screen and solving the challenge with confidence.

How do you approach coding problems before writing code? 👇

#JavaScript #Codewars #100DaysOfCode #WebDevelopment #Programming #Coding #SoftwareEngineer #LearnToCode #Developer #Tech*/
function nb_year(p0, percent, aug, p) {

    let population = p0;
  
    let years = 0;
  
  
  
    while (population < p) {
  
      population = Math.floor(
  
        population + population * (percent / 100) + aug
  
      );
  
  
  
      years++;
  
    }
  
  
  
    return years;
  
  }