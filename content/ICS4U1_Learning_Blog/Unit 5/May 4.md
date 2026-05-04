---
title: "OOPs intro - class, object, attributes, methods, constructor, access modifier"
date: 2026-05-04
tags:
  - unit5
  - oop
  - classes
  - objects
  - java
---
## Reflection
Today we started Unit 5 by learning about Object-Oriented Programming (OOP). Instead of just writing a list of instructions, we now think about our code in terms of "objects." A class is like a blueprint for an object, and an object is the actual thing we build from that blueprint. This helps us organize our code better, especially when we are trying to model real-world things.

### Key Concepts and Notes
- **Class**: A template or blueprint that defines what an object will look like and what it can do.
- **Object**: A specific instance created from a class. For example, if "Car" is the class, "My Toyota" is the object.
- **Attributes**: These are the variables inside a class that store data about the object (like the color or speed of a car).
- **Methods**: These are the actions or functions that an object can perform (like "drive" or "honk").
- **Constructor**: A special method that runs automatically when you create a new object. It is used to set the starting values for the attributes.
- **Access Modifiers**:
  - `public`: The code can be accessed from anywhere.
  - `private`: The code can only be accessed inside the same class. This helps protect the data.

## Examples
```java
// The Class (The Blueprint)
class Dog {
    // Attributes (Variables)
    private String name;
    private int age;

    // Constructor (Special method to create the dog)
    public Dog(String dogName, int dogAge) {
        name = dogName;
        age = dogAge;
    }

    // Method (Action)
    public void bark() {
        System.out.println(name + " says: Woof! Woof!");
    }

    // Getter Method (to see private data)
    public void info() {
        System.out.println(name + " is " + age + " years old.");
    }
}

public class Main {
    public static void main(String[] args) {
        // Creating an Object (An instance of the class)
        Dog myDog = new Dog("Buddy", 3);

        // Calling a method
        myDog.bark();
        myDog.info();
    }
}
```

---
## Backlinks
- [[Apr 30|BufferedReader and BufferedWriter]]
- [[Apr 29|Unchecked Exceptions, Throwing Exceptions, and File I/O]]
- [[Apr 28|StringBuilder]]
