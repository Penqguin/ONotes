---
date: 2026-04-07
tags:
  - unit3
  - recursion
  - base-case
  - stack-overflow
---
# Recursion in Java

## Reflection
Recursion is a programming technique where a method calls itself to solve a problem. Instead of using a loop, we break a large problem down into smaller, identical versions of the same problem. It was a bit confusing at first to think about a function calling itself, but it makes sense when you realize it's just like a set of nesting dolls—you keep opening them until you find the smallest one.

### Key Concepts and Notes
- **Base Case**: This is the most important part of recursion. It is the condition that tells the method when to stop calling itself. Without it, the program would run forever.
- **Recursive Call**: This is when the method calls itself again, but usually with a "smaller" version of the original data.
- **Stack Overflow**: If a recursive method never reaches its base case, the computer runs out of memory, causing the program to crash.
- **Simplicity**: Recursion can make complex code much shorter and easier to read, especially for things like searching through folders or solving math patterns.

## Examples
```java
// A recursive method to calculate the factorial of a number (n!)
public static int factorial(int n) {
    // Base case: if n is 1 or 0, the factorial is 1
    if (n <= 1) {
        return 1;
    }
    // Recursive call: n * factorial of (n-1)
    return n * factorial(n - 1);
}

public static void main(String[] args) {
    int number = 5;
    int result = factorial(number);
    
    // 5! = 5 * 4 * 3 * 2 * 1 = 120
    System.out.println("The factorial of " + number + " is: " + result);
}
```

---
## Backlinks
- [[Apr 1|Methods in Java]]
- [[Apr 8|Javadoc comments and Try catch blocks]]
