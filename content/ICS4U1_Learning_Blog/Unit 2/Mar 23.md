---
title: "While Loops"
date: 2026-03-23
tags:
  - unit2
  - loops
  - while-loop
  - input-validation
---
## Reflection
While loops are ideal for situations where the number of iterations is unknown and depends on a dynamic condition.

### Key Concepts and Notes
- Condition-first evaluation
- Input validation loops

## Examples
```java
Scanner sc = new Scanner(System.in);

double i;

System.out.printf("%-30s","Enter a positive number:");

i = sc.nextDouble();

while (i < 0) {
	System.out.printf("%-30s","Enter a positive number:");

	i = sc.nextDouble();
}
```
[Github Link](https://github.com/Penqguin/ICS4U1/blob/main/IsPositive.java)
[Github Link for another one](https://github.com/Penqguin/ICS4U1/blob/main/Sentinal.java)
[One last one](https://github.com/Penqguin/ICS4U1/blob/main/IsEven.java)

---
## Backlinks
- [[Mar 13|Control Structures (Loops)]]
- [[Mar 24|More Loops Practice]]
