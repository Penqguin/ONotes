---
date: 2026-03-05
---
# Nested If Statements

## Reflection

Selection statements are fundamental for decision-making in Java programming, allowing your code to branch into different execution paths based on specific criteria. By evaluating boolean conditions within parentheses, these statements determine which blocks of code to execute and which to skip, giving you precise control over the logical flow of your application.

### Key Concepts and Notes

- **The `if` Statement:** This is the mandatory starting point for conditional logic. It tests a boolean expression; if the condition evaluates to true, the associated block of code is executed.
- **Curly Braces and Scope:** Curly braces `{}` are used to group multiple statements under a single condition. If you omit the braces, only the very first statement immediately following the `if` is controlled by the condition.
- **The Semicolon Trap:** Placing a semicolon directly after an `if` condition (e.g., `if (x > 10);`) terminates the statement instantly, causing any following code blocks to execute unconditionally.
- **The `else` Statement:** This provides a fallback execution path. The code within an `else` block will run if, and only if, the preceding `if` condition evaluates to false.
- **Handling Multiple Conditions (`else if`):** To test multiple scenarios, you can chain `else if` statements after an initial `if`. A conditional chain must always start with an `if` statement, and the `else` block (if you choose to include one) must be the very last part of the chain.
- **Execution Order:** The order of your conditions is critical. Java evaluates an `if-else if-else` structure from top to bottom and will execute _only_ the first block that meets its condition, completely ignoring the rest of the chain once a match is found.

## Examples
```java
if (x > 0) { if (y > 0) { ... } }
```
