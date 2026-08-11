/***What if the number is too big for JavaScript to handle? 🤔**

That was the challenge behind today’s Codewars 4 kyu practice: **“Sum of Big Numbers.”**

I used the **PREP method** to slow myself down and focus on understanding the problem before jumping into the code.

**P — Parameters**
The function receives two parameters, `a` and `b`. Both are strings containing positive numbers that can be extremely large.

**R — Return**
The function needs to return their sum as a **string**.

**E — Example**
For example:

`"123" + "321" → "444"`

And:

`"11" + "99" → "110"`

The important part is that we can't simply convert the entire strings into JavaScript numbers because the values may be larger than JavaScript can safely represent.

**P — Pseudocode**

Instead of converting the entire numbers, I broke the problem down:

1. Start at the last digit of each string.
2. Add the two digits together.
3. Add any carry from the previous calculation.
4. Keep the last digit of the sum.
5. Carry the remaining value.
6. Move one position to the left.
7. Continue until there are no digits left.
8. Return the result as a string.

This exercise reminded me that **solving the problem isn't always about writing code quickly.**

It's about being able to explain:
**What are my inputs? What should I return? What is an example? And how can I break the problem into smaller steps?**

That's exactly the kind of thinking I'm practicing as I prepare for technical interviews.

One problem at a time. One explanation at a time. 💻

#Codewars #JavaScript #CodingPractice #TechnicalInterviews #InterviewPrep #ProblemSolving #SoftwareDevelopment*/

function add(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = "";

    while (i >= 0 || j >= 0 || carry > 0) {
        const digitA = i >= 0 ? Number(a[i]) : 0;
        const digitB = j >= 0 ? Number(b[j]) : 0;

        const sum = digitA + digitB + carry;

        result = (sum % 10) + result;
        carry = Math.floor(sum / 10);

        i--;
        j--;
    }

    return result;
}