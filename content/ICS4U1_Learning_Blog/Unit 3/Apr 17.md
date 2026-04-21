---
date: 2026-04-17
tags:
  - unit3
  - methods
  - recursion
  - exceptions
  - javadoc
  - review
---
# Methods, Method tracing, Javadoc comments, recursion, exception handling, String and Character class methods

## Reflection
This session was a comprehensive review of multiple core Java concepts. We covered method structure and tracing, documentation with Javadoc, the concept and implementation of recursion, exception handling using try-catch blocks, and reviewed key methods from both the String and Character wrapper classes. Understanding these topics together reinforces how they interact in real programs.

### Key Concepts and Notes
- **Methods**: Reusable blocks of code defined with a return type, name, and parameters. They promote code reusability and modularity.
- **Method Tracing**: The process of manually stepping through method calls to track variable values and understand program flow.
- **Javadoc Comments**: Special comments (`/** ... */`) used to document classes, methods, and parameters. They can be generated into HTML documentation.
- **Recursion**: A method that calls itself to solve smaller instances of a problem. Requires a base case to terminate.
- **Exception Handling**: Using `try`, `catch`, and `finally` blocks to handle runtime errors gracefully.
- **String Methods**: `length()`, `charAt()`, `substring()`, `indexOf()`, `toUpperCase()`, `toLowerCase()`, `trim()`, `equals()`.
- **Character Methods**: `isLetter()`, `isDigit()`, `isUpperCase()`, `toLowerCase()`, `toUpperCase()`, `isWhitespace()`.

## Examples
```java
/**
 * Demonstrates method tracing, recursion, and exception handling.
 * @author Student
 */
public class ReviewExamples {

    /**
     * Recursively calculates factorial of a number.
     * @param n the number to calculate factorial for
     * @return factorial of n
     */
    public static int factorial(int n) {
        if (n <= 1) return 1;  // base case
        return n * factorial(n - 1);  // recursive case
    }

    /**
     * Parses an integer from a string with exception handling.
     * @param input the string to parse
     * @return the parsed integer or -1 if invalid
     */
    public static int safeParse(String input) {
        try {
            return Integer.parseInt(input.trim());
        } catch (NumberFormatException e) {
            System.out.println("Invalid number: " + input);
            return -1;
        } finally {
            System.out.println("Parse attempt completed.");
        }
    }

    /**
     * Counts vowels in a string using Character methods.
     * @param text the string to analyze
     * @return number of vowels
     */
    public static int countVowels(String text) {
        int count = 0;
        for (int i = 0; i < text.length(); i++) {
            char ch = Character.toLowerCase(text.charAt(i));
            if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                count++;
            }
        }
        return count;
    }

    public static void main(String[] args) {
        // Recursion example
        System.out.println("5! = " + factorial(5));  // 120

        // Exception handling example
        System.out.println("Parsed: " + safeParse("42"));    // 42
        System.out.println("Parsed: " + safeParse("abc"));   // -1

        // String and Character methods example
        String greeting = "  Hello, World!  ";
        System.out.println("Original: '" + greeting + "'");
        System.out.println("Trimmed: '" + greeting.trim() + "'");
        System.out.println("Upper: " + greeting.toUpperCase());
        System.out.println("Vowels: " + countVowels(greeting));  // 3
    }
}
```

---
## Backlinks
- [[Apr 14|Character class methods]]
- [[Apr 13|String class and methods]]
- [[Apr 1|Methods in Java]]