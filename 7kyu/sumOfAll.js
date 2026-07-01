/*🚀 Keep Solving CodeWar Challenges to Keep Yourself Sharp at Problem-Solving 
 one.**

Today's challenge:

Given two integers (positive or negative), return the sum of every integer between them, inclusive.

🧠 Before anything the keyboard, I used the PREP method.

✅ Parameters

* Two integers: `a` and `b`
* They can be positive, negative, or even the same number.
* They're **not guaranteed to be in order**.

✅ Returns

The sum of every integer between `a` and `b`, including both numbers.

Example:

```javascript
getSum(-1, 2)
// -1 + 0 + 1 + 2 = 2
```

---

 ✍️ Pseudocode

Find the smaller number
Find the larger number

Set total to 0

Loop from the smaller number to the larger number
    Add each number to total

Return total




Taking one minute to identify:

* the parameters,
* the expected return,
* and the edge cases

made the implementation almost write itself.

The PREP method is becoming one of my favorite ways to approach coding problems because it forces me to think before I type.

#JavaScript #CodeWars #100DaysOfCode #WebDevelopment #NodeJS #Programming #CodingChallenge #SoftwareEngineer #CodingJourney*/



function getSum(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  let total = 0;

  for (let i = min; i <= max; i++) {
    total += i;
  }

  return total;
}