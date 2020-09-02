import { Employee } from "./Employee.js";

export class Director extends Employee {
    constructor(name, wage, ssn) {
        super(name, wage, ssn);
        this._bonus = 2;
        this._password;
    }
}