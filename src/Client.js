export class Client {
    constructor(fullName, ssn) {
        this._fullName = fullName;
        this._ssn = ssn;
    }

    get fullName() {
        return this._fullName;
    }

    get ssn() {
        return this._ssn;
    }
}