---
date: 2026-04-27
tags:
  - unit4
  - arraylist
  - loops
  - practice
---
# Iterating through ArrayLists

## Reflection
Today I practiced how to go through an ArrayList using loops. Since ArrayLists use the `.size()` method and the `.get()` method, it is a bit different from regular arrays. I also looked at the "for-each" loop, which is a much simpler way to look at every item in a list without needing to track the index number.

### Key Concepts and Notes
- **For Loop**: You can use a standard `for` loop with `i < list.size()` to access each item using `list.get(i)`.
- **Enhanced For Loop (For-Each)**: This is a shorter way to write a loop. It looks like `for (Type item : list)`. It is easier to read but doesn't let you see the index number.
- **Printing**: You can print the whole ArrayList just by putting it in a `System.out.println()`, which is very helpful for quick debugging.
- **Practice**: I practiced adding numbers to a list and then using a loop to find the total sum.

## Examples
```java
import java.util.ArrayList;

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
    }
}
```

---
## Backlinks
- [[Apr 24|ArrayList in Java]]
- [[Apr 23|2D Arrays - Jagged Arrays, Methods, Searching and Population]]
- [[Apr 22|2D Arrays]]
