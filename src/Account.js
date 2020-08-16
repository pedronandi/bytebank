import { Client } from "./Client.js";

export class Account {
    static totalAccounts = 0;

    constructor(agency, client, balance, withdrawTax) {
        this._agency = agency;
        this._id = (Account.totalAccounts + 1);
        this._client = client;
        this._balance = balance;
        this._withdrawTax = withdrawTax;
        Account.totalAccounts++;
    }

    set agency(agency) {
        this._agency = agency;
    }

    set client(client) {
        if(client instanceof Client)
            this._client = client;
        else
            console.log("Client informed is not a valid client!");
    }

    deposit(amount) {
        if(amount <= 0)
            return;
        
        this._balance += amount;
    }

    withdraw(amount) {
        amount *= this._withdrawTax;

        if(amount > this._balance)
            return;
        
        this._balance -= amount;

        return amount;
    }

    transfer(amount, destinyAccount) {
        const amountWithdrawn = this.withdraw(amount);
        destinyAccount.deposit(amountWithdrawn);
    }

    get agency() {
        return this._agency;
    }

    get id() {
        return this._id;
    }

    get client() {
        return this._client;
    }

    get balance() {
        return this._balance;
    }
}