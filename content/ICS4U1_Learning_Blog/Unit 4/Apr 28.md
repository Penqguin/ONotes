---
title: "StringBuilder"
date: 2026-04-28
tags:
  - unit4
  - stringbuilder
  - strings
  - efficiency
---
# StringBuilder

## Reflection
Today we learned about the `StringBuilder` class. In Java, normal Strings are "immutable," which means they cannot be changed after they are created. If you try to change a String, Java has to make a brand new one, which can be slow. `StringBuilder` is different because it lets us change, add, or remove parts of the text without making a new object. This makes it much faster when we need to do a lot of work with text.

### Key Concepts and Notes
- **Mutable**: Unlike regular Strings, a `StringBuilder` can be changed.
- **`append(value)`**: This adds text to the very end of your current `StringBuilder`.
- **`insert(index, value)`**: This lets you put new text anywhere in the middle.
- **`delete(start, end)`**: This removes a section of the text.
- **`reverse()`**: A very easy way to flip the entire string backwards.
- **`toString()`**: When you are finished changing the text, you use this to turn it back into a normal String.
- **Performance**: It is much better to use `StringBuilder` inside loops than regular Strings.

## Examples
```java
public class StringBuilderExample {
    public static void main(String[] args) {
        // 1. Create a StringBuilder
        StringBuilder sb = new StringBuilder("Hello");

        // 2. Add to the end
        sb.append(" World");
        System.out.println("After append: " + sb);

        // 3. Insert text at an index
        sb.insert(5, "!");
        System.out.println("After insert: " + sb);

        // 4. Delete a part (from index 5 up to 6)
        sb.delete(5, 6);
        System.out.println("After delete: " + sb);

        // 5. Reverse the whole thing
        sb.reverse();
        System.out.println("After reverse: " + sb);

        // 6. Convert back to a String
        String finalResult = sb.toString();
    }
}
```

---
## Backlinks
- [[Apr 27|Iterating through ArrayLists]]
- [[Apr 24|ArrayList in Java]]
- [[Apr 23|2D Arrays - Jagged Arrays, Methods, Searching and Population]]
