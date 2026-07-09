/*Today's Codewars challenge reminded me why I like using the **PREP** method before writing any code.

Instead of jumping straight into JavaScript, I try to understand the problem first.

### P – Parameters

* The input is a string called `pin`.
* Can it be empty?
* Can it contain spaces, letters, symbols, or a newline?
* We need to account for all of these possibilities.

### R – Return

Return:

* `true` if the PIN is exactly **4 or 6 characters long** **and** contains **only digits**.
* `false` otherwise.

### E – Examples

```javascript
validatePIN("1234")    // true
validatePIN("123456")  // true
validatePIN("123")     // false
validatePIN("12345")   // false
validatePIN("12a4")    // false
validatePIN("1234\n")  // false
validatePIN("")        // false
```

### P – Pseudocode

1. Check if the PIN length is 4 or 6.
2. If it isn't, return `false`.
3. Check if every character is a digit.
4. If every character is a digit, return `true`.
5. Otherwise, return `false`.

Breaking the problem into **Parameters, Return, Examples, and Pseudocode** made the solution much easier to write. Instead of trying to memorize code, I'm focusing on building a process for solving problems.

Every Codewars challenge is helping me become a better problem solver, one step at a time. 🚀

#JavaScript #Codewars #100Devs #ProblemSolving #SoftwareEngineering #LearnToCode #CodingJourney
### JavaScript Solution*/


function validatePIN(pin) {
  if (pin.length !== 4 && pin.length !== 6) {
    return false;
  }

  for (let i = 0; i < pin.length; i++) {
    if (pin[i] < '0' || pin[i] > '9') {
      return false;
    }
  }

  return true;
}
