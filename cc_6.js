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

// ----- Step 3: Create the Manager subclass -----
class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department); // use super() to inherit from Employee
    this.teamSize = teamSize;
  }

  // override describe() to include team size
  describe() {
    return `Manager: ${this.name} — Department: ${this.department} — Team Size: ${this.teamSize}`;
  }
}

// ----- Step 5: Create the Company class -----
class Company {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    console.log("=== Company Employees ===");
    this.employees.forEach(emp => console.log(emp.describe()));
  }
}

// ----- Step 4 & Step 6: Instantiate Employees, Manager, and Company -----
const emp1 = new Employee("Ava Reed", "Finance");
const emp2 = new Employee("Liam Torres", "Operations");
const mgr1 = new Manager("Zoe Patel", "Engineering", 7);

const company = new Company();
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(mgr1);

// display all employees
company.listEmployees();
