---
title: "Polymorphism"
date: 2026-05-11
tags:
  - unit5
  - polymorphism
  - oop
  - java
---
## Reflection
Today we learned about Polymorphism. This is a big word that basically means "many forms." In Java, it allows us to treat different objects in the same way if they share a common parent class. This makes our code simpler and easier to change later on.

### Key Concepts and Notes
- **"Many Forms"**: An object can be treated as its own type or as its parent's type.
- **Method Overriding**: This is when a child class provides its own version of a method that is already in the parent class.
- **Upcasting**: You can store a child object in a variable of the parent's type (e.g., `Animal myDog = new Dog();`).
- **Flexibility**: Polymorphism lets us write methods that work with any object that belongs to a certain group (like a parent class), instead of writing a new method for every single type.

## Examples
```java
// Parent class
class Animal {
    public void makeSound() {
        System.out.println("The animal makes a sound");
    }
}

// Child class
class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("The dog barks");
    }
}

// Another child class
class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("The cat meows");
    }
}

public class Main {
    public static void main(String[] args) {
        // Polymorphism: Using the Animal type to hold different objects
        Animal myDog = new Dog();
        Animal myCat = new Cat();

        myDog.makeSound(); // Prints: The dog barks
        myCat.makeSound(); // Prints: The cat meows
    }
}
```

---
## Backlinks
- [[May 8|Review: Classes, Objects, Constructors, Encapsulation, and Inheritance]]
- [[May 7|Objects in Arrays and ArrayLists]]
- [[May 6|Inheritance in Java]]
