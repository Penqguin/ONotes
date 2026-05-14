---
title: "UML Diagrams"
date: 2026-05-13
tags:
  - unit5
  - uml
  - oop
  - java
---
## Reflection
Today we learned about UML diagrams. UML stands for Unified Modeling Language. These are visual diagrams that help programmers plan and map out their code before writing it. It acts like a blueprint for a software project, showing the structure of classes and how they relate to each other.

### Key Concepts and Notes
- **What is UML?**: It is a standard way to visualize a system's design.
- **Class Diagrams**: These show classes, their attributes (variables), and their methods, along with how they connect.
- **Relationships**: UML shows how classes interact, like inheritance (a child is a parent) or association (a class uses another).
- **Why use it?**: It makes it easier to communicate design ideas, find mistakes early, and keep track of complex projects.
- **Visibility**: UML uses symbols (+ for public, - for private) to show how accessible class members are.

## Examples
A simple class diagram structure in text might look like this:

```text
+---------------------+
|      Vehicle        |
+---------------------+
| - speed: int        |
+---------------------+
| + startEngine(): void |
| + honk(): void      |
+---------------------+
          ^
          |
    +-----+-----+
    |           |
+----------+ +------------+
|   Car    | |  ElectricCar|
+----------+ +------------+
```

---
## Backlinks
- [[May 12|Abstraction]]
