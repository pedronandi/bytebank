import { Client } from "./src/Client.js";
import { Account } from "./src/Account.js";
import { CheckingAccount } from "./src/CheckingAccount.js";
import { SavingAccount } from "./src/SavingAccount.js";

const pedro = new Client("Pedro Nandi", "11122233304");
const PedrosAccount = new CheckingAccount(1234, pedro);

PedrosAccount.deposit(500);
const amount = PedrosAccount.withdraw(340);

console.log(PedrosAccount);

const carol = new Client("Carolina Lucena", "44455566607");

const CarolsAccount = new SavingAccount(3456, carol, 700);

console.log(CarolsAccount);

CarolsAccount.transfer(100, PedrosAccount);

console.log(CarolsAccount);
console.log(PedrosAccount);

console.log("Total of accounts:", Account.totalAccounts);
console.log("Total of checking accounts:", CheckingAccount.totalCheckingAccounts);
console.log("Total of saving accounts:", SavingAccount.totalSavingAccounts);

PedrosAccount.accountType();

/*
Abstract class test:
  const accountTest = new Account(1, pedro, 0, 1);

Abstract method test:
  CarolsAccount.accountType();  
 */