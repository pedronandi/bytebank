import { Employee } from "./Employee.js";

export class Manager extends Employee {
    constructor(name, wage, ssn) {
        super(name, wage, ssn);
        this._bonus = 1.1;
        this._password;
    }
}