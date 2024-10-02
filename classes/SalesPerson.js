const Employee = require('./Employee');

class SalesPerson extends Employee{
    #totalSales;
    constructor(name, title, clients = []){
        super(name, title);
        this.#totalSales = 0;
        this.clients = clients; 
    }

    getSalesNumbers(){
        return this.#totalSales;
    }

    makeSale(amount){
        this.#totalSales += amount;
    }
    
}

module.exports = {
    SalesPerson,
}