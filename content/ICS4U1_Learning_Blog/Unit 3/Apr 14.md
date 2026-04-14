---
date: 2026-04-14
tags:
  - unit3
  - character
  - wrapper-class
  - char
  - character-methods
---
# Character class methods

## Reflection
The Character class is a wrapper class for the primitive `char` type in Java. It provides useful utility methods for testing and transforming characters, such as checking if a character is a digit, letter, or whitespace, and converting between upper and lower case. Understanding Character methods is essential for input validation, text parsing, and working with individual characters within Strings.

### Key Concepts and Notes
- **Wrapper Class**: Character is the wrapper class for `char`, allowing chars to be used as objects when needed.
- **Autoboxing/Unboxing**: Java automatically converts between `char` and `Character` (autoboxing) and vice versa (unboxing).
- **isLetter()**: Returns `true` if the character is a letter (a-z, A-Z, and Unicode letters).
- **isDigit()**: Returns `true` if the character is a digit (0-9).
- **isLetterOrDigit()**: Returns `true` if the character is a letter or digit.
- **isUpperCase() / isLowerCase()**: Tests if a character is upper or lower case.
- **toUpperCase() / toLowerCase()**: Converts a character to upper or lower case.
- **isWhitespace()**: Returns `true` if the character is whitespace (space, tab, newline, etc.).
- **charValue()**: Returns the primitive `char` value from a Character object.
- **Unicode Support**: Character methods handle Unicode characters, not just ASCII.

## Examples
```java
public class CharacterMethods {
    public static void main(String[] args) {
        char ch = 'A';
        
        // Testing character types
        System.out.println("Is letter: " + Character.isLetter(ch));      // true
        System.out.println("Is digit: " + Character.isDigit(ch));        // false
        System.out.println("Is upper case: " + Character.isUpperCase(ch)); // true
        System.out.println("Is whitespace: " + Character.isWhitespace(' ')); // true
        
        // Character conversion
        System.out.println("To lower case: " + Character.toLowerCase(ch)); // 'a'
        System.out.println("To upper case: " + Character.toUpperCase('z'));  // 'Z'
        
        // Autoboxing and unboxing
        Character wrapped = 'X';           // autoboxing
        char unwrapped = wrapped;          // unboxing
        
        // Practical example: Counting letters in a string
        String text = "Hello, World! 123";
        int letterCount = 0;
        int digitCount = 0;
        
        for (int i = 0; i < text.length(); i++) {
            if (Character.isLetter(text.charAt(i))) {
                letterCount++;
            } else if (Character.isDigit(text.charAt(i))) {
                digitCount++;
            }
        }
        System.out.println("Letters: " + letterCount);  // 10
        System.out.println("Digits: " + digitCount);    // 3
    }
}
```

---
## Backlinks
- [[Apr 13|String class and methods]]
- [[Apr 1|Methods in Java]]