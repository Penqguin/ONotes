---
title: "Cheatsheet - Summary of Unit 5"
date: 2026-05-14
tags:
  - unit5
  - summary
  - oop
  - java
---
## Reflection
Today we wrapped up Unit 5 by creating a comprehensive "cheatsheet" of our Object-Oriented Programming (OOP) studies. This unit provided the core tools for designing modular, maintainable, and reusable Java code.

### Key Concepts and Notes
- **Classes & Objects**: 
  - **Class**: The blueprint/template.
  - **Object**: An instance created from the class using `new`.
- **Encapsulation**:
  - **Goal**: Protect internal state.
  - **Method**: Use `private` fields and public `getters`/`setters`.
- **Inheritance**:
  - **Syntax**: `class Child extends Parent`.
  - **Goal**: Code reuse. Subclasses inherit fields and methods from the parent.
- **Polymorphism**:
  - **Definition**: The ability for an object to take on many forms.
  - **Key**: Parent reference variables can point to child objects (e.g., `Parent obj = new Child();`).
- **Abstraction**:
  - **Abstract Class**: `abstract` class. Can have concrete methods and fields, but cannot be instantiated.
  - **Interface**: `interface`. A contract that forces implementing classes to define all methods (usually all public/abstract).
- **UML Diagrams**:
  - **Purpose**: Visualizing class relationships (Inheritance, Association).
  - **Visibility**: `+` (public), `-` (private).

## Quick Reference Table
| Concept | Key Keyword(s) | Main Benefit |
| :--- | :--- | :--- |
| **Encapsulation** | `private`, `get`/`set` | Data protection |
| **Inheritance** | `extends` | Reusing code |
| **Polymorphism** | `@Override` | Flexibility |
| **Abstraction** | `abstract`, `interface` | Hiding complexity |

---
## Backlinks
- [[May 13|UML Diagrams]]
- [[May 12|Abstraction]]
- [[May 11|Polymorphism]]
