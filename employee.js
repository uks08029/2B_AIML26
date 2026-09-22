class Employee {
    constructor(id, name, basicSalary) {
        this.id = id;
        this.name = name;
        this.basicSalary = basicSalary;
    }

    calculateSalary() {
        return this.basicSalary;
    }
}

class Manager extends Employee {
    constructor(id, name, basicSalary, incentive) {
        super(id, name, basicSalary);
        this.incentive = incentive;
    }

    calculateSalary() {
        return this.basicSalary + this.incentive;
    }
}

let e1 = new Employee(101, "Nischal", 30000);
let m1 = new Manager(102, "Rohit", 50000, 10000);

console.log("Employee Name:", e1.name);
console.log("Employee Salary:", e1.calculateSalary());

console.log("----------------");

console.log("Manager Name:", m1.name);
console.log("Manager Salary:", m1.calculateSalary());