/*Ever feel stuck in a coding problem and need a structured approach to break free? 💡 
Try using the PREP method to break down a classic triangle validation problem, and solve it step-by-step.

P – Parameters:
First, I asked: what inputs does the function need? In this case, it takes three integers—let’s say a, b, and c, representing side lengths. I also noted that all sides must be greater than zero—no side can be zero or negative.

R – Returns:
I clarified that the function should return true if the three sides form a valid triangle—meaning a positive area—and false otherwise.

E – Examples:
I looked at examples to ensure clarity. For instance, (1, 2, 3) is false because they lie flat; (2, 2, 2) is true since all sides are equal; (4, 2, 3) is true because it forms a valid shape.

P – Pseudocode:
Finally, I outlined the logic: first, check that all sides are greater than zero, then ensure the sum of any two sides is greater than the third. If all conditions pass, we return true; otherwise, false.

Using this method, I stayed focused, broke down the problem logically, and avoided jumping straight to code without thinking first.



hashtag#ProblemSolving hashtag#PREPMethod hashtag#JavaScript hashtag#LearningToCode hashtag#TriangleInequality hashtag#100Devs*/
function isTriangle(a, b, c) {
    // Check all sides are positive
    if (a <= 0 || b <= 0 || c <= 0) {
    return false;
    }
    
    // Check triangle inequality theorem
    return (a + b > c) && (a + c > b) && (b + c > a);
   }