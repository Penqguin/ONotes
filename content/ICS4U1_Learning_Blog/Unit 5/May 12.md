---
title: "Abstraction"
date: 2026-05-12
tags:
  - unit5
  - abstraction
  - oop
  - java
---
## Reflection
Today we looked at Abstraction. Abstraction is a way to simplify things by hiding the complicated parts and only showing what is necessary. In programming, it means we focus on what an object does rather than how it works inside. This helps us manage complexity by letting us ignore details that don't matter at the moment.

### Key Concepts and Notes
- **Hiding Complexity**: We use abstraction to hide the "how" and show the "what".
- **Abstract Classes**: These are classes that cannot be turned into objects themselves. They are meant to be a base for other classes.
- **Abstract Methods**: These are methods that are declared but don't have any code inside them. The child classes must provide the code.
- **`abstract` Keyword**: This is the word we use in Java to define an abstract class or method.
- **Interface vs. Abstract Class**: While both provide abstraction, abstract classes can have some finished code, while interfaces usually just list what needs to be done.

## Examples
```java
// Abstract class
abstract class Vehicle {
    // Abstract method (no body)
    public abstract void startEngine();

    // Regular method
    public void honk() {
        System.out.println("Beep beep!");
    }
}

// Child class
class Car extends Vehicle {
    @Override
    public void startEngine() {
        System.out.println("The car engine starts with a key.");
    }
}

// Another child class
class ElectricCar extends Vehicle {
    @Override
    public void startEngine() {
        System.out.println("The electric car starts with a button.");
    }
}

public class Main {
    public static void main(String[] args) {
        // Vehicle myVehicle = new Vehicle(); // Error: Cannot create an object of an abstract class
        
        Vehicle myCar = new Car();
        Vehicle myTesla = new ElectricCar();

        myCar.startEngine();
        myTesla.startEngine();
        
        myCar.honk(); // Can still use regular methods from the abstract class
    }
}
```

---
## Backlinks
- [[May 11|Polymorphism]]
- [[May 8|Review: Classes, Objects, Constructors, Encapsulation, and Inheritance]]
- [[May 7|Objects in Arrays and ArrayLists]]
