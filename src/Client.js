export class Client {
    constructor(fullName, ssn, password) {
        this._fullName = fullName;
        this._ssn = ssn;
        this._password = password;
    }

    get fullName() {
        return this._fullName;
    }

    get ssn() {
        return this._ssn;
    }

    /*authenticate(password) {
        return this._password == password;
    }*/
}