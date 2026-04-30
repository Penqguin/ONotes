---
title: "1D Arrays"
date: 2026-04-21
tags:
  - unit4
  - arrays
  - 1d-arrays
  - data-structures
  - iteration
---
# 1D Arrays

## Reflection
A 1D array is a data structure that stores a fixed-size sequence of elements of the same type in contiguous memory locations. Arrays are fundamental in Java for organizing and manipulating collections of data efficiently. Unlike variables that hold single values, arrays allow you to work with multiple related values under one name, accessed through numeric indices. Understanding arrays is essential for tasks like storing lists, processing data sets, and building more complex data structures.

### Key Concepts and Notes
- **Declaration**: Arrays are declared with a type followed by `[]`, e.g., `int[] numbers;` or `String[] names;`.
- **Creation**: Arrays are created using `new type[size]` or with an initializer list `{val1, val2, val3}`.
- **Indexing**: Array indices start at 0 and go up to `length - 1`. Access elements with `array[index]`.
- **Length**: The `length` property (not a method) returns the number of elements in the array.
- **Default Values**: Numeric arrays initialize to 0, boolean to `false`, objects to `null`.
- **Fixed Size**: Once created, an array's size cannot be changed. Use ArrayList for dynamic sizing.
- **Bounds**: Accessing an index outside `0` to `length-1` throws `ArrayIndexOutOfBoundsException`.
- **Iteration**: Use `for` loops with index variables, or enhanced `for` loops (`for (type element : array)`).
- **Array Methods**: The `Arrays` utility class provides methods like `sort()`, `fill()`, `copyOf()`, and `toString()`.

## Examples
```java
import java.util.Arrays;

public class ArrayExamples {
    public static void main(String[] args) {
        // Creating arrays
        int[] numbers = new int[5];           // creates array of size 5, filled with 0s
        String[] names = {"Alice", "Bob", "Charlie"};  // initializer list
        double[] prices = new double[]{9.99, 19.99, 29.99};

        // Accessing and modifying elements
        numbers[0] = 10;
        numbers[1] = 20;
        numbers[2] = 30;
        System.out.println("First element: " + numbers[0]);  // 10
        System.out.println("Array length: " + numbers.length); // 5

        // Iterating with standard for loop
        System.out.println("\nStandard for loop:");
        for (int i = 0; i < names.length; i++) {
            System.out.println("names[" + i + "] = " + names[i]);
        }

        // Iterating with enhanced for loop (for-each)
        System.out.println("\nEnhanced for loop:");
        for (String name : names) {
            System.out.println(name);
        }

        // Finding sum and average
        int[] scores = {85, 92, 78, 90, 88};
        int sum = 0;
        for (int score : scores) {
            sum += score;
        }
        double average = (double) sum / scores.length;
        System.out.println("\nSum: " + sum);        // 433
        System.out.println("Average: " + average);  // 86.6

        // Finding maximum value
        int max = scores[0];
        for (int i = 1; i < scores.length; i++) {
            if (scores[i] > max) {
                max = scores[i];
            }
        }
        System.out.println("Maximum: " + max);  // 92

        // Using Arrays utility methods
        int[] data = {5, 2, 8, 1, 9};
        Arrays.sort(data);
        System.out.println("\nSorted: " + Arrays.toString(data));  // [1, 2, 5, 8, 9]

        int[] copy = Arrays.copyOf(data, data.length);
        System.out.println("Copy: " + Arrays.toString(copy));

        Arrays.fill(numbers, 100);
        System.out.println("Filled: " + Arrays.toString(numbers));  // [100, 100, 100, 100, 100]
    }
}
```

---
## Backlinks
- [[../Unit 3/Apr 17|Methods, Recursion, and Exceptions]]
- [[../Unit 3/Apr 14|Character class methods]]