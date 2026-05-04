---
title: "Iterating through ArrayLists"
date: 2026-04-27
tags:
  - unit4
  - arraylist
  - loops
  - practice
---
## Reflection
Today I practiced how to go through an ArrayList using loops. Since ArrayLists use the `.size()` method and the `.get()` method, it is a bit different from regular arrays. I also looked at the "for-each" loop, which is a much simpler way to look at every item in a list without needing to track the index number.

### Key Concepts and Notes
- **For Loop**: You can use a standard `for` loop with `i < list.size()` to access each item using `list.get(i)`.
- **Enhanced For Loop (For-Each)**: This is a shorter way to write a loop. It looks like `for (Type item : list)`. It is easier to read but doesn't let you see the index number.
- **Iterator Class**: An `Iterator` is an object that can be used to loop through collections, like `ArrayList`. It is part of the `java.util` package. It is especially useful when you need to remove items from a collection while you are looping through it, which can cause errors (like `ConcurrentModificationException`) in a standard `for` or for-each loop.
- **Printing**: You can print the whole ArrayList just by putting it in a `System.out.println()`, which is very helpful for quick debugging.

## Examples
```java
import java.util.ArrayList;
import java.util.Iterator;

public class LoopExample {
    public static void main(String[] args) {
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);

        // 1. Using a standard for loop
        System.out.println("Using standard for loop:");
        for (int i = 0; i < numbers.size(); i++) {
            System.out.println("Index " + i + ": " + numbers.get(i));
        }

        // 2. Using an enhanced for loop (For-Each)
        System.out.println("\nUsing for-each loop:");
        int sum = 0;
        for (Integer num : numbers) {
            System.out.println("Value: " + num);
            sum += num;
        }
        System.out.println("Total Sum: " + sum);

        // 3. Using an Iterator
        System.out.println("\nUsing an Iterator:");
        Iterator<Integer> it = numbers.iterator();
        while (it.hasNext()) {
            Integer value = it.next();
            System.out.println("Value: " + value);
            
            // Example of safe removal while iterating
            if (value == 20) {
                it.remove(); 
                System.out.println("Removed 20");
            }
        }
        System.out.println("List after Iterator removal: " + numbers);
    }
}
```

---
## Backlinks
- [[Apr 24|ArrayList in Java]]
- [[Apr 23|2D Arrays - Jagged Arrays, Methods, Searching and Population]]
- [[Apr 22|2D Arrays]]
