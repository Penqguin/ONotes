---
title: "Selection and Switch Statements"
date: 2026-03-10
tags:
  - unit2
  - selection
  - switch-statements
  - conditionals
---
## Reflection
Switch statements offer a cleaner alternative to long if-else chains when comparing a single variable against multiple constants. They improve readability and can sometimes be more efficient for the compiler to optimize.

### Key Concepts and Notes
- `switch`: The keyword that starts the selection block.
- `case`: Matches a specific value.
- `break`: Prevents "fall-through" where the code continues into the next case regardless of the condition.
- `default`: The optional block that runs if no cases match (similar to an `else` block).

**When to use switch:**
- Use a `switch` when you have many discrete values for a single variable (like menu options or days of the week).
- Use `if-else` for ranges (e.g., `score > 90`) or complex boolean logic.

**Supported Types:**
In Java, you can switch on `byte`, `short`, `char`, `int`, `String`, and `enum` types.

## Examples
### Basic Switch Example
```java
int day = 3;
String dayString;

switch (day) {
    case 1:  dayString = "Monday";
             break;
    case 2:  dayString = "Tuesday";
             break;
    case 3:  dayString = "Wednesday";
             break;
    case 4:  dayString = "Thursday";
             break;
    case 5:  dayString = "Friday";
             break;
    case 6:  dayString = "Saturday";
             break;
    case 7:  dayString = "Sunday";
             break;
    default: dayString = "Invalid day";
             break;
}
System.out.println(dayString); // Output: Wednesday
```

### External References
[Github Link 1](https://github.com/Penqguin/ICS4U1/blob/main/Unit%202%20practice/AnotherCalculator.java)
[Github Link 2](https://github.com/Penqguin/ICS4U1/blob/main/Unit%202%20practice/Calc.java)

---
## Backlinks
- [[Mar 4|Selection Statements]]
- [[Mar 11|In Class Assignment]]
