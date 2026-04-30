---
title: "Scope, Lifetime, Default values, and Access modifiers"
date: 2026-04-09
tags:
  - unit3
  - scope
  - lifetime
  - access-modifiers
  - encapsulation
---
## Reflection
Understanding scope, variable lifetime, default values, and access modifiers is crucial for writing robust Java programs. Scope determines where a variable is accessible in code, while lifetime defines how long a variable exists in memory. Default values prevent uninitialized variables from causing unexpected behavior. Access modifiers control encapsulation and visibility, which are fundamental to object-oriented programming principles.

### Key Concepts and Notes
- **Scope**: The region of code where a variable is accessible. Variables declared inside a block are only accessible within that block.
- **Block Scope**: Variables defined inside `{}` braces (loops, conditionals, methods) have block scope.
- **Class Scope**: Instance variables have class scope and are accessible throughout the class.
- **Lifetime**: How long a variable exists in memory. Local variables exist only while their method executes; instance variables exist as long as the object exists.
- **Default Values**: Fields (instance variables) get default values if not initialized (`0` for numbers, `false` for boolean, `null` for objects). Local variables must be explicitly initialized.
- **Access Modifiers**: Keywords that control visibility:
  - `public`: Accessible from anywhere
  - `private`: Accessible only within the same class
  - `protected`: Accessible within the same package and by subclasses
  - Default (no modifier): Accessible within the same package

## Examples
```java
public class Student {
    // Instance variables (class scope) - have default values
    private String name;      // default: null
    private int age;          // default: 0
    private double gpa;       // default: 0.0

    public void study() {
        // Local variable - must be initialized, no default value
        int hours = 2;

        if (hours > 0) {
            // Block scope variable
            String message = "Studying...";
            System.out.println(message);
        }
        // message is NOT accessible here - out of scope
    }

    // Getter with public access
    public String getName() {
        return name;  // name is accessible within the class
    }

    // Setter with validation
    public void setAge(int age) {
        if (age >= 0) {
            this.age = age;  // 'this' refers to the instance variable
        }
    }
}
```

---
## Backlinks
- [[Apr 1|Methods in Java]]
- [[Apr 8|Javadoc comments and Try catch blocks]]