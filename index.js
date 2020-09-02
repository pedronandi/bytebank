import { Client } from "./src/Client.js";
import { Account } from "./src/account/Account.js";
import { CheckingAccount } from "./src/account/CheckingAccount.js";
import { SavingAccount } from "./src/account/SavingAccount.js";
import { Manager } from "./src/employee/Manager.js";
import { Director } from "./src/employee/Director.js";
import { AuthenticationSystem } from "./src/AuthenticationSystem.js";

const pedro = new Client("Pedro Nandi", "11122233304", "123");
const PedrosAccount = new CheckingAccount(1234, pedro);

PedrosAccount.deposit(500);
const amount = PedrosAccount.withdraw(340);

console.log(PedrosAccount);

const carol = new Client("Carolina Lucena", "44455566607", "123456");

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

const director = new Director("Dona Tromba", 10000, 12345678900);
director.setPassword("123456");

const manager = new Manager("Jujuba", 5000, 12345678901);
manager.setPassword("123");

const isDirectorLogged = AuthenticationSystem.login(director, "123456");
const isManagerLogged = AuthenticationSystem.login(manager, "123");
const isClientLogged = AuthenticationSystem.login(pedro, "123");

console.log(isDirectorLogged, isManagerLogged, isClientLogged);