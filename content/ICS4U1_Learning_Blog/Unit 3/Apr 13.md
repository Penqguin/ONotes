---
title: "String class and methods"
date: 2026-04-13
tags:
  - unit3
  - string
  - string-methods
  - string-class
  - immutability
---
## Reflection
The String class is one of the most commonly used classes in Java. Strings are immutable, meaning once created, they cannot be changed. This immutability makes Strings thread-safe and secure, but it also means operations like concatenation create new String objects rather than modifying existing ones. Understanding String methods is essential for text manipulation, user input processing, and data formatting in any Java application.

### Key Concepts and Notes
- **Immutability**: Strings cannot be changed after creation. Methods like `concat()` or `toUpperCase()` return new String objects.
- **String Pool**: Java stores string literals in a special memory area called the String pool for efficiency.
- **Length**: The `length()` method returns the number of characters in a String.
- **charAt()**: Returns the character at a specific index (indices start at 0).
- **substring()**: Extracts a portion of a String; can take one or two parameters (start index, or start and end index).
- **indexOf()**: Returns the index of the first occurrence of a character or substring; returns -1 if not found.
- **toUpperCase() / toLowerCase()**: Returns a new String with all characters converted to upper or lower case.
- **trim()**: Removes leading and trailing whitespace from a String.
- **equals()**: Compares String content (use this instead of `==` for comparing String values).
- **compareTo()**: Compares Strings lexicographically; returns negative, zero, or positive.

## Examples
```java
public class StringMethods {
    public static void main(String[] args) {
        // Creating Strings
        String greeting = "  Hello, World!  ";
        
        // Common String methods
        System.out.println("Original: " + greeting);
        System.out.println("Length: " + greeting.length());
        System.out.println("Trimmed: " + greeting.trim());
        System.out.println("Uppercase: " + greeting.toUpperCase());
        System.out.println("Character at index 2: " + greeting.charAt(2));
        System.out.println("Index of 'World': " + greeting.indexOf("World"));
        System.out.println("Substring (0-5): " + greeting.substring(0, 5));
        
        // String comparison - IMPORTANT!
        String s1 = "Java";
        String s2 = "Java";
        String s3 = new String("Java");
        
        System.out.println("s1 == s2: " + (s1 == s2));           // true (same literal in pool)
        System.out.println("s1 == s3: " + (s1 == s3));           // false (different objects)
        System.out.println("s1.equals(s3): " + s1.equals(s3));  // true (same content)
    }
}
```

---
## Backlinks
- [[Apr 1|Methods in Java]]
- [[Apr 9|Scope, Lifetime, Default values, and Access modifiers]]