---
title: "ArrayList in Java"
date: 2026-04-24
tags:
  - unit4
  - arraylist
  - collections
  - dynamic-arrays
---
## Reflection
Today we learned about ArrayLists. Unlike regular arrays that have a fixed size, ArrayLists can grow and shrink as needed. This makes them much more flexible when we don't know how much data we will have ahead of time. We also learned that ArrayLists only work with objects, so we have to use wrapper classes like `Integer` instead of `int`.

### Key Concepts and Notes
- **Dynamic Sizing**: ArrayLists automatically resize themselves when you add or remove elements.
- **`import java.util.ArrayList;`**: You must import this class to use it.
- **Wrapper Classes**: Since ArrayLists store objects, we use `Integer`, `Double`, `Boolean`, and `Character` for primitive types.
- **`add(value)`**: Adds an item to the end of the list.
- **`get(index)`**: Returns the item at the specific index.
- **`size()`**: Returns the number of elements in the list (like `.length` for arrays).
- **`set(index, value)`**: Replaces the element at a specific index.
- **`remove(index)`**: Deletes the element and shifts everything else to fill the gap.

## Examples
```java
import java.util.ArrayList;

public class ArrayListExample {
    public static void main(String[] args) {
        // 1. Create an ArrayList of Strings
        ArrayList<String> fruits = new ArrayList<>();

        // 2. Adding elements
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");

        // 3. Getting an element
        System.out.println("First fruit: " + fruits.get(0));

        // 4. Checking the size
        System.out.println("Number of fruits: " + fruits.size());

        // 5. Updating an element
        fruits.set(1, "Blueberry");

        // 6. Removing an element
        fruits.remove(2); // Removes Cherry

        // 7. Printing the whole list
        System.out.println("Final list: " + fruits);
    }
}
```

---
## Backlinks
- [[Apr 23|2D Arrays - Jagged Arrays, Methods, Searching and Population]]
- [[Apr 22|2D Arrays]]
- [[Apr 21|1D Arrays]]
