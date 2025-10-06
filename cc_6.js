// ======================================================
// Coding Challenge 06 - Employee Management System
// ======================================================

// ----- Step 2: Create the Employee class -----
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `Employee: ${this.name} — Department: ${this.department}`;
  }
}

