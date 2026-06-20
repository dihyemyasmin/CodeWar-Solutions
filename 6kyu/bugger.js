/*Stop writing code. Start solving problems.

One thing I've learned from tackling JavaScript challenges on Codewars is that the best solutions don't start with code—they start with understanding the problem.


Using the PREP method (Parameters, Returns, Examples, Pseudocode) helped me slow down, think critically, and build a clear path to the solution before touching my keyboard.
Parameters: The function takes a positive integer num.
Returns: It returns the number of times we multiply the digits until we get a single digit.
Examples: For 39, the multiplicative persistence is 3 (3×9=27, 2×7=14, 1×4=4). For 999, it's 4 steps. For 4, it's 0 steps since it's already a single digit.
Pseudocode: I outlined the steps:
Check if num is a single digit—if so, return 0.
Otherwise, multiply its digits.
Count each multiplication step and repeat until a single digit is reached.

By grounding my solution in a structured approach, the implementation became efficient and easy to follow. Every line of code now ties directly back to a clear logic path.

#JavaScript #Codewars #100Devs #SoftwareEngineering #WebDevelopment #ProblemSolving*/
function persistence(num) {
    let count = 0;
    
    // Continue looping until num is a single digit
    while (num >= 10) {
        // Convert num to a string, split digits, and multiply them
        num = num.toString()
            .split('')
            .map(Number)
            .reduce((a, b) => a * b);
        count++;
    }
    
    return count;
}