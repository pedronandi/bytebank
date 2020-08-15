import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const pedro = new Cliente();

pedro.nome = "Pedro Nandi";
pedro.cpf = "11122233304";

console.log(pedro.nome, pedro.cpf);

const contaDoPedro = new ContaCorrente();

contaDoPedro.agencia = 1234;
contaDoPedro.depositar(500);
contaDoPedro.sacar(340);

console.log(contaDoPedro.agencia, contaDoPedro.getSaldo());