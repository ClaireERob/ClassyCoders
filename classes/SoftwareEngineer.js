import { Employee } from "./Employee.js";

class SoftwareEngineer extends Employee {
    #salary
    #isHired
    #programmingLanguages
    constructor(name, position, salary, isHired, programmingLanguages){
        this.name = name, 
        this.position = position, 
        this.#salary = salary
        this.#isHired = true
        this.#programmingLanguages = programmingLanguages
    }

get ProgrammingLanguages(){
    return this.#programmingLanguages
}

set ProgrammingLanguage(language){
    language.push(this.#programmingLanguages);
}
    
}

export {SoftwareEngineer as default};