---
date: 2026-04-01
---
# Methods in Java

## Reflection
Methods are the building blocks of modular programming in Java. They embody the DRY (Don't Repeat Yourself) principle by allowing us to encapsulate logic into reusable blocks. Mastering how to define and invoke methods, as well as understanding the flow of data through parameters and return values, is essential for writing clean, maintainable code.

### Key Concepts and Notes
- **Method Signature**: Consists of the method name and the parameter list.
- **Access Modifiers**: Define the visibility (e.g., `public`, `private`).
- **Return Type**: The data type the method returns (`void` if it returns nothing).
- **Parameters**: Variables defined in the method declaration that act as placeholders for values passed to the method.
- **Arguments**: The actual values passed to the method when it is called.
- **The `return` Keyword**: Used to exit a method and optionally send a value back to the caller.
- **Method Overloading**: Defining multiple methods with the same name but different parameter lists.

## Examples
```java
// A simple method to add two integers
public static int add(int a, int b) {
    return a + b;
}

// A void method that prints a message
public static void greet(String name) {
    System.out.println("Hello, " + name + "!");
}

public static void main(String[] args) {
    int sum = add(5, 10);
    System.out.println("Sum: " + sum);
    
    greet("Computer Science Student");
}
```
