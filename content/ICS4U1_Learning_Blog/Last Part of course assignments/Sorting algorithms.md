---
title: Merge Sort
date: 2026-05-22
tags:
  - merge-sort
  - algorithms
  - recursion
  - java
  - dsa
---
## Reflection
Today we explored Merge Sort, a highly efficient sorting algorithm that uses a "divide and conquer" strategy. Unlike simpler algorithms like Bubble Sort or Selection Sort, Merge Sort consistently performs well even with large datasets. It's a great practical example of how recursion can be used to solve complex problems by breaking them down into simpler ones.

### Key Concepts and Notes
- **Divide and Conquer**: The core idea is to recursively split the array into two halves until each subarray contains only one element, which is naturally sorted.
- **Merge Operation**: The "magic" happens in the merge step, where two sorted subarrays are combined into a single, larger sorted array.
- **Recursive Structure**: Merge Sort relies heavily on recursion to manage the splitting process, calling itself on smaller and smaller halves.
- **Time Complexity**: It has a stable time complexity of O(n log n) for best, average, and worst cases, making it much faster than O(n²) algorithms for large inputs.
- **Space Complexity**: One downside is that it requires extra memory (O(n)) to store the temporary arrays used during the merge phase.

## Examples
```java
public class MergeSort {
    // Main function that sorts arr[l..r] using merge()
    public static void sort(int[] arr, int left, int right) {
        if (left < right) {
            // Find the middle point
            int mid = left + (right - left) / 2;

            // Sort first and second halves
            sort(arr, left, mid);
            sort(arr, mid + 1, right);

            // Merge the sorted halves
            merge(arr, left, mid, right);
        }
    }

    // Merges two subarrays of arr[].
    // First subarray is arr[l..m]
    // Second subarray is arr[m+1..r]
    public static void merge(int[] arr, int left, int mid, int right) {
        // Find sizes of two subarrays to be merged
        int n1 = mid - left + 1;
        int n2 = right - mid;

        // Create temp arrays
        int[] L = new int[n1];
        int[] R = new int[n2];

        // Copy data to temp arrays
        for (int i = 0; i < n1; ++i)
            L[i] = arr[left + i];
        for (int j = 0; j < n2; ++j)
            R[j] = arr[mid + 1 + j];

        // Merge the temp arrays
        int i = 0, j = 0;
        int k = left;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        // Copy remaining elements of L[] if any
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        // Copy remaining elements of R[] if any
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    public static void main(String args[]) {
        int[] arr = { 12, 11, 13, 5, 6, 7 };

        System.out.println("Original array:");
        printArray(arr);

        sort(arr, 0, arr.length - 1);

        System.out.println("\nSorted array:");
        printArray(arr);
    }

    public static void printArray(int[] arr) {
        for (int i : arr) {
            System.out.print(i + " ");
        }
        System.out.println();
    }
}
```

---
## Backlinks
- [[Mar 30|Time complexity of loops]]
- [[Apr 17|Methods, Method tracing, Javadoc comments, recursion, exception handling, String and Character class methods]]
- [[Apr 21|Arrays in Java]]

