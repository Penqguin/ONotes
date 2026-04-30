---
title: "2D Arrays"
date: 2026-04-22
tags:
  - unit4
  - arrays
  - 2d-arrays
  - nested-loops
  - data-structures
---
# 2D Arrays

## Reflection
A 2D array is essentially an "array of arrays." It allows us to store data in a grid-like structure with rows and columns, similar to a spreadsheet or a game board. In Java, 2D arrays are very useful when we need to represent matrices, coordinate systems, or any data that fits into a table format. By using two indices instead of one, we can precisely locate and manipulate data within this grid.

### Key Concepts and Notes
- **Declaration**: Declared with two sets of square brackets, e.g., `int[][] matrix;`.
- **Creation**: Created with `new type[rows][columns]`, for example: `int[][] table = new int[3][4];` (3 rows, 4 columns).
- **Initialization**: Can be initialized with nested braces: `int[][] grid = { {1, 2}, {3, 4} };`.
- **Indexing**: The first index is the row, and the second is the column: `grid[row][column]`. Indices start at 0.
- **Row Length**: `grid.length` gives the number of rows.
- **Column Length**: `grid[i].length` gives the number of columns in row `i`.
- **Nested Loops**: The most common way to iterate through a 2D array is using a loop inside another loop (one for rows, one for columns).
- **Memory Structure**: Java treats 2D arrays as an array where each element is another array. This means rows can technically have different lengths (known as "ragged" arrays).

## Examples
```java
public class TwoDArrayExamples {
    public static void main(String[] args) {
        // Creating a 3x3 grid
        int[][] board = new int[3][3];

        // Filling the grid with values
        int count = 1;
        for (int i = 0; i < board.length; i++) {
            for (int j = 0; j < board[i].length; j++) {
                board[i][j] = count++;
            }
        }

        // Printing the 2D array
        System.out.println("Board Content:");
        for (int row = 0; row < board.length; row++) {
            for (int col = 0; col < board[row].length; col++) {
                System.out.print(board[row][col] + "\t");
            }
            System.out.println(); // New line after each row
        }

        // Accessing a specific element
        int value = board[1][2]; // Row 1, Column 2
        System.out.println("\nValue at [1][2]: " + value);

        // Initializer list example
        String[][] seatingChart = {
            {"Alice", "Bob"},
            {"Charlie", "David"},
            {"Eve", "Frank"}
        };
        System.out.println("Seating Chart Rows: " + seatingChart.length);
        System.out.println("Seating Chart Columns: " + seatingChart[0].length);
    }
}
```

---
## Backlinks
- [[Apr 21|1D Arrays]]
- [[../Unit 3/Apr 1|Methods in Java]]
