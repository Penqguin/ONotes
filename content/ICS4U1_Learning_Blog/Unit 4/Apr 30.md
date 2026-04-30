---
date: 2026-04-30
tags:
  - unit4
  - buffering
  - file-io
  - io-streams
---
# BufferedReader and BufferedWriter

## Reflection
Today we learned about `BufferedReader` and `BufferedWriter`. These are more efficient ways to read and write text files compared to basic `FileReader` and `FileWriter`. They use a "buffer," which is like a temporary holding area in memory, to store data. This means the computer doesn't have to access the hard drive as often, making the program run much faster, especially when dealing with large files.

### Key Concepts and Notes
- **What is Buffering?**: Instead of reading or writing one character at a time, buffering collects a large chunk of data and processes it all at once.
- **`BufferedReader`**: A class that reads text from an input stream efficiently.
- **`readLine()`**: This is the most common method used with `BufferedReader`. It reads an entire line of text and returns it as a `String`. It returns `null` when it reaches the end of the file.
- **`BufferedWriter`**: A class that writes text to an output stream efficiently.
- **`newLine()`**: This method adds a line break that is correct for whichever operating system you are using (Windows, Mac, or Linux).
- **Efficiency**: Always prefer buffered versions when working with files to improve performance.
- **Try-with-resources**: Just like other I/O classes, these should be used in a `try` block to ensure they are closed automatically.

## Examples
```java
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class BufferedExample {
    public static void main(String[] args) {
        String fileName = "example.txt";

        // 1. Writing to a file using BufferedWriter
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(fileName))) {
            writer.write("Hello, this is the first line.");
            writer.newLine();
            writer.write("This second line is written efficiently using a buffer.");
        } catch (IOException e) {
            System.out.println("An error occurred while writing: " + e.getMessage());
        }

        // 2. Reading from a file using BufferedReader
        try (BufferedReader reader = new BufferedReader(new FileReader(fileName))) {
            String line;
            System.out.println("Reading from file:");
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("An error occurred while reading: " + e.getMessage());
        }
    }
}
```

---
## Backlinks
- [[Apr 29|Unchecked Exceptions, Throwing Exceptions, and File I/O]]
- [[Apr 28|StringBuilder]]
- [[Apr 27|Iterating through ArrayLists]]
