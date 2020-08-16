import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const pedro = new Cliente("Pedro Nandi", "11122233304");
const contaDoPedro = new ContaCorrente(1234, pedro);

contaDoPedro.depositar(500);
const valorSacado = contaDoPedro.sacar(340);

console.log(contaDoPedro);

const carol = new Cliente("Carolina Lucena", "44455566607");

const contaDaCarol = new ContaCorrente(3456, carol);

contaDaCarol.depositar(700);

console.log(contaDaCarol);

contaDaCarol.transferir(100, contaDoPedro);

console.log(contaDaCarol);
console.log(contaDoPedro);
console.log("Total de contas:", ContaCorrente.totalDeContas);