const employees = [];
function Employee(name, jobTitle, salary, status = "Full Time"){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
}

Employee.prototype.printEmployeeForm = function(){
    console.log(`${this.name} ${this.jobTitle} ${this.salary} ${this.status}`)
}

const lisa = new Employee("Lisa", "CEO", "$200,000");
const ralph = new Employee("Ralph", "Pilot", "$100,000", "contract");
const steve = new Employee("Steve", "Driver", "$100,000");
lisa.status= "Part-time";
function addToEmployees(name, ...rest){
    employees.push(name, ...rest);
}

addToEmployees(lisa, ralph, steve)
console.log(employees)


lisa.printEmployeeForm();
ralph.printEmployeeForm();
steve.printEmployeeForm();
