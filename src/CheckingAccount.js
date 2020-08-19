import { Client } from "./Client.js";
import { Account } from "./Account.js";

export class CheckingAccount extends Account{
    static totalCheckingAccounts = 0;

    constructor(agency, client) {
        super(agency, client, 0, 1.1);
        
        CheckingAccount.totalCheckingAccounts++;
    }

    accountType() {
        console.log("This is a checking account!");
    }
}