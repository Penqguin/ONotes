---
title: "Inheritance in Java"
date: 2026-05-06
tags:
  - unit5
  - oop
  - inheritance
---
## Reflection
Today we learned about inheritance in Java. Inheritance lets a class take on properties and methods from another class. The original class is called the parent or superclass, and the new class is the subclass. This helps us reuse code and organize our programs by creating hierarchies, which makes it easier to manage related classes.

### Key Concepts and Notes
- **Extends Keyword**: We use `extends` to make one class inherit from another.
- **Parent Class (Superclass)**: The class that provides its features to others.
- **Child Class (Subclass)**: The class that inherits features and can add its own specific ones.
- **`super` keyword**: Used to call methods or constructors from the parent class.
- **Code Reuse**: You don't have to rewrite code that is already in the parent class.
- **Organized Hierarchy**: Helps structure code based on relationships (e.g., a "Car" is a type of "Vehicle").

## Examples
```java
// Parent class
class Vehicle {
    void move() {
        System.out.println("The vehicle is moving.");
    }
}

// Child class
class Car extends Vehicle {
    void honk() {
        System.out.println("Beep beep!");
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        myCar.move(); // Uses inherited method
        myCar.honk(); // Uses own method
    }
}
```

---
## Backlinks
- [[May 4|Introduction to OOP]]
