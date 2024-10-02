const Employee = require('./Employee');

class Manager extends Employee {
    #employeesManaged;
    constructor(name, title, salary, department){
    super(name, title, salary);
    this.department = department;
    this.#employeesManaged = [];
}

getEmployeesManaged(){
    return this.#employeesManaged;
}

setEmployeesManaged(employee){
    this.#employeesManaged.push(employee)
}



    
}

module.exports = {
    Manager,
}