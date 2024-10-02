<<<<<<< Updated upstream
const Employee = require('./Employee');

class SalesPerson extends Employee{
    #totalSales;
    constructor(name, postion, salary, clients = []){
        super(name, position, salary);
        this.#totalSales = 0;
        this.clients = clients; 
    }

    getSalesNumbers(){
        return this.#totalSales;
    }

    makeSale(amount){
        this.#totalSales += amount;
    }
    
=======
import { Employee } from "./Employee.js";

class SalesPerson extends Employee {
        #salary
        #isHired
        #totalSales
        constructor(name, position, salary, totalSales, clients){
            this.name = name; 
            this.position = position;
            this.#salary = salary;
            this.#totalSales = [];
            this.clients = clients;
        }

        getSalesNumbers(){
            return this.#totalSales
        }

        makeSale(amount){
            this.#totalSales += amount
        }    
>>>>>>> Stashed changes
}


const malik = new SalesPerson("Malik", "Enterprise Sale Associate", 90000, ["Vine", "MySpace", "Shutterfly"])
malik.getSalesNumbers(); // 0
malik.makeSale(10500);
malik.makeSale(20000);
malik.getSalesNumbers(); // 30500



export {SalesPerson as default};
