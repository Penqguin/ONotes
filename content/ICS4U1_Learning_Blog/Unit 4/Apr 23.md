---
date: 2026-04-23
tags:
  - unit4
  - arrays
  - jagged-arrays
  - array-methods
  - 2d-arrays
---
# 2D Arrays - Jagged Arrays, Methods, Searching and Population

## Reflection
Today we looked at jagged arrays, which are 2D arrays where the rows can have different lengths. This is useful for saving memory when we don't need a perfect grid. We also practiced how to populate arrays with specific data and how to replace elements. Using Java's built-in methods like `Arrays.deepToString()` helps us quickly see what's inside our 2D arrays without always needing nested loops for printing.

### Key Concepts and Notes
- **Jagged Arrays**: A 2D array where each row is a different size.
- **Population**: The process of filling an array with values (like using a loop to add numbers 1-10).
- **Replacing Elements**: You can change any value by using its specific index: `array[row][col] = newValue;`.
- **`Arrays.deepToString()`**: A special method used to print the entire 2D array in one line.
- **Searching**: Using nested `for` loops to find a specific value in a 2D array (linear search).
- **Row-wise Population**: Filling an array one row at a time using a nested `for` loop.
- **Dynamic Rows**: You can declare the number of rows first and define the column sizes later.

## Examples
```java
import java.util.Arrays;

public class JaggedArrays {
    public static void main(String[] args) {
        // 1. Creating a jagged array
        int[][] jagged = new int[3][]; // 3 rows, columns not set yet
        
        jagged[0] = new int[2]; // Row 0 has 2 columns
        jagged[1] = new int[4]; // Row 1 has 4 columns
        jagged[2] = new int[3]; // Row 2 has 3 columns

        // 2. Populating with numbers
        int startValue = 1;
        for (int i = 0; i < jagged.length; i++) {
            for (int j = 0; j < jagged[i].length; j++) {
                jagged[i][j] = startValue++;
            }
        }

        // 3. Printing using deepToString
        System.out.println("Original: " + Arrays.deepToString(jagged));

        // 4. Replacing an element
        // Changing the value in Row 1, Column 2 to 99
        jagged[1][2] = 99;
        
        System.out.println("Modified: " + Arrays.deepToString(jagged));

        // 5. Searching for a value
        int target = 99;
        boolean found = false;
        for (int i = 0; i < jagged.length; i++) {
            for (int j = 0; j < jagged[i].length; j++) {
                if (jagged[i][j] == target) {
                    System.out.println("Found " + target + " at row " + i + ", col " + j);
                    found = true;
                    break;
                }
            }
            if (found) break;
        }
    }
}
```

---
## Backlinks
- [[Apr 22|2D Arrays]]
- [[Apr 21|1D Arrays]]
- [[../Unit 3/Apr 1|Methods in Java]]
