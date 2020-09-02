import { Client } from "../Client.js";
import { Account } from "./Account.js";

export class SavingAccount extends Account {
    static totalSavingAccounts = 0;

    constructor(agency, client, initialBalance) {
        super(agency, client, initialBalance, 1.02);

        SavingAccount.totalSavingAccounts++;
    }
}