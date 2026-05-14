---
title: "Interfaces"
date: 2026-05-12
tags:
  - unit5
  - interfaces
  - oop
  - java
---
## Reflection
Today we learned about Interfaces. An interface is like a contract or a list of rules that a class must follow. It defines what a class should be able to do, but it doesn't provide the actual code for those actions. When a class "implements" an interface, it is promising to provide the code for every method listed in that interface. This is useful for making sure different classes can work together in a predictable way.

### Key Concepts and Notes
- **A Blueprint for Classes**: Interfaces tell a class which methods it needs to have.
- **`interface` Keyword**: Used instead of `class` to define the interface.
- **`implements` Keyword**: Used by a class to say it will follow the interface's rules.
- **No Method Bodies**: Methods in an interface usually don't have any code inside `{}` (except for default methods).
- **Multiple Interfaces**: A class can follow more than one interface at a time, which is different from inheritance where a class can only have one parent.

## Examples
```java
// Define the interface
interface Animal {
    void makeSound(); // No body, just the name of the method
    void sleep();
}

// Implement the interface in a class
class Dog implements Animal {
    public void makeSound() {
        System.out.println("The dog says: Woof Woof");
    }

    public void sleep() {
        System.out.println("Zzz...");
    }
}

// Implement the interface in another class
class Cat implements Animal {
    public void makeSound() {
        System.out.println("The cat says: Meow");
    }

    public void sleep() {
        System.out.println("Zzz...");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myDog = new Dog();
        Animal myCat = new Cat();

        myDog.makeSound();
        myCat.makeSound();
        
        myDog.sleep();
    }
}
```

---
## Backlinks
- [[May 12|Abstraction]]
- [[May 11|Polymorphism]]
