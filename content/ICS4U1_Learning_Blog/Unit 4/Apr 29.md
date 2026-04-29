---
date: 2026-04-29
tags:
  - unit4
  - exceptions
  - debugging
  - file-io
---
# Unchecked Exceptions, Throwing Exceptions, and File I/O

## Reflection
Today we learned about Unchecked Exceptions, which are also called Runtime Exceptions. Unlike other exceptions, the compiler doesn't force us to handle them because they usually happen because of mistakes in our code (bugs). We also learned how to manually "throw" an exception to stop our program when something isn't right. Additionally, we covered how to work with files using the `Files` class for utilities, `FileWriter` for writing data to files, and `FileReader` for reading data from files.

### Key Concepts and Notes
- **Unchecked Exceptions (Runtime Exceptions)**: These are errors that usually happen because of a mistake in the program. The compiler doesn't require us to handle or declare them, because we should be fixing the code itself to avoid them.
- **NullPointerException**: Happens if you try to use an object that is set to `null` (it doesn't point to anything).
- **ArithmeticException**: Happens when you do math that doesn't work, like dividing a number by zero.
- **ArrayIndexOutOfBoundsException**: Happens if you try to look at a spot in an array that doesn't exist (like index 10 in an array of size 5).
- **IllegalArgumentException**: Used when you send bad or wrong data to a method.
- **Throwing an Exception**: You can use the `throw` keyword followed by `new ExceptionType("message")` to stop the program and show an error if a rule in your code is broken.
- **`java.nio.file.Files`**: A powerful class that provides methods to work with files, such as reading all lines, writing, checking if a file exists, or deleting files.
- **`java.io.FileWriter`**: A class used to write text data into a file. You should always close the `FileWriter` after use (often using a `try-with-resources` block) to make sure all data is saved.
- **`java.io.FileReader`**: A class used to read text data from a file character by character. Like `FileWriter`, it should be closed after use.

## Examples
```java
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class ExceptionAndFileExample {
    public static void main(String[] args) {
        // 1. Example of throwing an exception
        checkAge(15);

        // 2. Example of writing to a file using FileWriter
        try (FileWriter writer = new FileWriter("test.txt")) {
            writer.write("Hello, this is saved to a file!");
        } catch (IOException e) {
            System.out.println("Error writing to file: " + e.getMessage());
        }

        // 3. Example of reading from a file using FileReader
        try (FileReader reader = new FileReader("test.txt")) {
            int character;
            while ((character = reader.read()) != -1) {
                System.out.print((char) character);
            }
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
    }

    public static void checkAge(int age) {
        if (age < 18) {
            throw new IllegalArgumentException("Age must be 18 or older!");
        }
        System.out.println("Access granted.");
    }
}
```

---
## Backlinks
- [[Apr 28|StringBuilder]]
- [[Apr 27|Iterating through ArrayLists]]
- [[Apr 24|ArrayList in Java]]

