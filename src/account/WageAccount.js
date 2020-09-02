import { Client } from "../Client.js.js";
import { Account } from "./Account.js";

export class WageAccount extends Account {
    static totalWageAccounts = 0;

    constructor(agency, client, initialBalance) {
        super(agency, client, initialBalance, 1.01);

        WageAccount.totalWageAccounts++;
    }

    accountType() {
        console.log("This is a wage account!");
    }
}