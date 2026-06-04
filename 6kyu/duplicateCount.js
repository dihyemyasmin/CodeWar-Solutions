/*Just solved a Codewars challenge today:
“Count the number of characters that appear more than once (case-insensitive).”
But the real value wasn’t the solution—it was the pattern behind it.

Normalize → Count → Filter

1. Normalize the data
Convert everything to lowercase so the problem becomes consistent:
text.toLowerCase()

2. Build a frequency map
Next, I transform the string into structured data:
"aabbcde"
→ { a:2, b:2, c:1, d:1, e:1 }
This step is the core skill:
turning raw input into something measurable.

3. Filter the result
Only care about characters that appear more than once:
count > 1


💡
🧠 Key takeaway
Most string problems in interviews are not about strings.

They are about:
👉 frequency maps
👉 grouping data
👉 filtering patterns

Once you see that, the problems stop feeling random.

🚀 What I’m focusing on next
Training myself to recognize patterns faster because the goal isn’t to remember code—it’s to recognize structure.

 Final solution*/

 
function duplicateCount(text) {
 const counts = text.toLowerCase().split('').reduce((acc, char) => {
 acc[char] = (acc[char] || 0) + 1;
 return acc;
 }, {});

 return Object.values(counts).filter(n => n > 1).length;
}
