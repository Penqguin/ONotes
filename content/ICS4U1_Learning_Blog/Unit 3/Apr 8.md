---
title: "Javadoc comments and Try catch blocks"
date: 2026-04-08
tags:
  - unit3
  - javadoc
  - exceptions
  - try-catch
  - error-handling
---
## Reflection
Javadoc and Try-Catch blocks help make code look professional and keep it from crashing. Javadoc is a great way to document what our methods do so others can use them easily. Try-Catch is like a safety net; it lets the program handle errors gracefully instead of just stopping with a big error message.

### Key Concepts and Notes
- **Javadoc**: These are special comments that start with `/**` and end with `*/`. They are used to create documentation for our code.
- **@param**: A tag used in Javadoc to explain what a specific parameter (input) does.
- **@return**: A tag used to describe what the method sends back after it finishes.
- **Exceptions**: These are "errors" that happen while the program is running, like trying to divide by zero or opening a file that doesn't exist.
- **Try block**: This is where we put the code that might cause an error.
- **Catch block**: If an error happens in the `try` block, the code here runs to handle it so the program doesn't crash.

## Examples
```java
/**
 * This method divides two numbers and handles potential errors.
 * 
 * @param a The number to be divided (numerator)
 * @param b The number to divide by (denominator)
 * @return The result of the division
 */
public static double divide(int a, int b) {
    try {
        // We "try" to divide the numbers
        return a / b;
    } catch (ArithmeticException e) {
        // If we try to divide by zero, this "catch" block runs
        System.out.println("Error: You cannot divide by zero!");
        return 0;
    }
}

public static void main(String[] args) {
    // Normal call
    System.out.println("10 / 2 = " + divide(10, 2));
    
    // Call that would normally crash the program
    System.out.println("10 / 0 = " + divide(10, 0));
}
```

---
## Backlinks
- [[Apr 1|Methods in Java]]
- [[Apr 7|Recursion in Java]]
- [[Apr 9|Scope, Lifetime, Default values, and Access modifiers]]
