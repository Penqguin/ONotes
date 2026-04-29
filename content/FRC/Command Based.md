---
date: 2026-04-29
tags:
  - FRC
  - Java
---

# 2026 FRC Command-Based Programming Standards

The Command-Based framework remains the gold standard for FRC robot software, emphasizing a declarative approach to robot behavior.

## Core Concepts

### 1. Subsystems
*   **Encapsulation:** Subsystems wrap hardware (motors, sensors) and provide high-level methods.
*   **Resource Management:** Only one command can require a subsystem at a time.
*   **Default Commands:** Subsystems should have a default command (e.g., a drive command for a drivetrain) that runs when no other command is active.

### 2. Commands
*   **Lifecycle:** `initialize()`, `execute()`, `isFinished()`, `end(boolean interrupted)`.
*   **Functional Design:** Favor using `Commands` factory methods (e.g., `run()`, `runOnce()`, `startEnd()`) and lambdas over creating many small class files.

### 3. Command Compositions
Compositions allow building complex logic from simple commands:
*   **`sequence()`**: Run commands in order.
*   **`parallel()`**: Run commands at the same time.
*   **`deadline()`**: Parallel, ends when the first specified command ends.
*   **`race()`**: Parallel, ends when *any* command ends.

### 4. Triggers and Bindings
*   Use `Trigger` and `CommandXboxController` for input.
*   Bindings like `onTrue()`, `whileTrue()`, and `toggleOnTrue()` define how user input or sensor states trigger commands.

## 2026 Standards & Trends
*   **Units Library:** Strict usage of `edu.wpi.first.units` for all physical quantities (Meters, Volts, Seconds) to prevent unit mismatch bugs.
*   **AdvantageScope Integration:** Designing subsystems for "Data Log" compatibility, ensuring all internal state is logged for post-match analysis.
*   **Lambdas and Method References:** Minimize boilerplate by using `subsystem::method` references within command factories.

---

# YAGSL (Yet Another Generic Swerve Library)

YAGSL is a hardware-agnostic swerve library designed to simplify the complexity of swerve drive implementation through a configuration-first approach.

## Configuration Structure
YAGSL uses JSON files located in `src/main/deploy/swerve/` to define the robot.

*   **`swervedrive.json`**: Global settings (gyro type, conversion factors, inversions).
*   **`pidf.json`**: PID and Feedforward constants for Drive and Steer motors.
*   **`physicalproperties.json`**: Robot physical data (wheel diameter, gear ratios, current limits).
*   **`modules/`**: Individual JSONs for each module (ID, location, offsets).

## Key Classes

### `SwerveParser`
The entry point that reads the JSON configuration and constructs the `SwerveDrive` object.
```java
SwerveDrive swerveDrive = new SwerveParser(new File(Filesystem.getDeployDirectory(), "swerve")).createSwerveDrive(MaxSpeed);
```

### `SwerveDrive`
The main class used within your `Drivetrain` subsystem.
*   `drive()`: Teleop driving using `Translation2d` and rotation.
*   `setChassisSpeeds()`: Used for autonomous/path-following.
*   `updateOdometry()`: Keeps track of robot position on the field.
*   `resetOdometry()`: Calibrates robot position.

### `SwerveDriveTelemetry`
Automatically pushes swerve data to NetworkTables for visualization in AdvantageScope or Shuffleboard, facilitating rapid debugging.

## Implementation Workflow
1.  **Hardware Setup:** Define motor and encoder IDs.
2.  **JSON Configuration:** Create/Update the JSON files in the deploy directory.
3.  **Subsystem Integration:** Instantiate `SwerveDrive` via `SwerveParser` in your drivetrain subsystem.
4.  **Command Binding:** Set a default drive command using `SwerveDrive.drive()` and joystick inputs.
