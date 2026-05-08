---
title: "Objects in Arrays and ArrayLists"
date: 2026-05-07
tags:
  - unit5
  - oop
  - arrays
  - arraylist
  - scanner
---
## Reflection
Today we learned how to store objects inside arrays and ArrayLists. This is helpful because it lets us group many objects together, like a list of students or a collection of books, and manage them all at once. We also practiced using the Scanner class to get information from the user to create these objects and learned how to pass objects into methods.

### Key Concepts and Notes
- **Arrays of Objects**: You can make an array that holds objects instead of just simple types like `int` or `double`.
- **Lists in Classes**: A class can contain an array or an ArrayList to store multiple items as part of its data.
- **Scanner for Objects**: Using `Scanner` to ask the user for details (like a name or age) and then using that data to create a new object.
- **Passing Objects**: You can send an entire object as a parameter to a method, which allows the method to work with that object's data.
- **Initialization**: When you create an array of objects, each spot starts as `null` until you create a new object for it.

## Examples
```java
import java.util.ArrayList;
import java.util.Scanner;

class Student {
    String name;
    int grade;

    Student(String name, int grade) {
        this.name = name;
        this.grade = grade;
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        
        // 1. Array of Objects
        Student[] classList = new Student[2];
        
        // 2. Using Scanner to initialize
        for (int i = 0; i < classList.length; i++) {
            System.out.print("Enter name: ");
            String name = input.nextLine();
            System.out.print("Enter grade: ");
            int grade = input.nextInt();
            input.nextLine(); // clear buffer
            
            classList[i] = new Student(name, grade);
        }

        // 3. ArrayList of Objects
        ArrayList<Student> students = new ArrayList<>();
        students.add(new Student("Alice", 12));
        
        // 4. Passing object as parameter
        printStudent(classList[0]);
    }

    public static void printStudent(Student s) {
        System.out.println("Student: " + s.name + ", Grade: " + s.grade);
    }
}
```

---
## Backlinks
- [[May 6|Inheritance in Java]]
- [[May 4|Introduction to OOP]]
