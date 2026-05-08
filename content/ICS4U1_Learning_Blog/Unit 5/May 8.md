---
title: "Review: Classes, Objects, Constructors, Encapsulation, and Inheritance"
date: 2026-05-08
tags:
  - unit5
  - oop
  - review
  - java
---
## Reflection
Today we reviewed the main parts of Object-Oriented Programming (OOP) in Java. We looked at how to create classes and use them to make objects. It was a good chance to see how everything we've learned fits together to make a working program.

### Key Concepts and Notes
- **Classes and Objects**: A class is a plan, and an object is what you build from that plan.
- **Constructors**: These are used to set the starting values for a new object.
- **Encapsulation**: We use `private` variables and `public` getters and setters to keep our data safe.
- **Inheritance**: This allows one class to get methods and variables from another class, which saves time and effort.

## Examples
```java
// A simple class showing encapsulation and a constructor
public class Student {
    private String name;
    private int grade;

    // Constructor
    public Student(String name, int grade) {
        this.name = name;
        this.grade = grade;
    }

    // Getter for name
    public String getName() {
        return name;
    }

    // Setter for grade
    public void setGrade(int grade) {
        this.grade = grade;
    }
}
```

---
## Backlinks
- [[May 7|Objects in Arrays and ArrayLists]]
- [[May 6|Inheritance in Java]]
