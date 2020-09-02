export class Employee {
    constructor(name, wage, ssn) {
        this._name = name;
        this._wage = wage;
        this._ssn = ssn;
        this._bonus = 1;
        this._password;
    }

    setPassword(password) {
        this._password = password;
    }

    authenticate(password) {
        return this._password == password;
    }
}