---
date: 2026-03-30
tags:
  - unit2
  - time-complexity
  - loops
  - big-o
---
# Time complexity of loops

## Reflection

Understanding time complexity and Big-O notation is essential for analyzing how algorithms scale with input size. When working with loops, it's important to recognize how nested loops and loop conditions affect the overall efficiency of your code.

### Key Concepts and Notes

- **Big-O Notation:** A mathematical notation that describes the upper bound of an algorithm's time complexity as the input size grows. It focuses on the worst-case scenario and ignores constant factors.
- **Common Time Complexities:**
  - O(1) — Constant time: execution time doesn't change with input size (e.g., accessing an array element by index)
  - O(log n) — Logarithmic time: typically seen in binary search or when dividing the problem size
  - O(n) — Linear time: a single loop iterating through n elements
  - O(n log n) — Linearithmic time: seen in efficient sorting algorithms like merge sort
  - O(n²) — Quadratic time: nested loops where each iterates n times
  - O(2ⁿ) — Exponential time: each additional input doubles the work
- **Loop Analysis:**
  - A single loop that runs n times has O(n) complexity
  - Nested loops multiply their complexities: two nested loops each running n times gives O(n²)
  - Loops that divide the problem (e.g., i = i * 2 or i = i / 2) result in O(log n)
- **Practical Considerations:** When designing algorithms, aim for the lowest possible time complexity while keeping the code readable and maintainable.

## Examples
```java
// O(n) - single loop
for (int i = 0; i < n; i++) {
    System.out.println(i);
}

// O(n²) - nested loops
for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        System.out.println(i + ", " + j);
    }
}

// O(log n) - dividing problem size
for (int i = 1; i < n; i = i * 2) {
    System.out.println(i);
}
```

---
## Backlinks
- [[Mar 13|Control Structures (Loops)]]
- [[Mar 27|In class assignment]] 