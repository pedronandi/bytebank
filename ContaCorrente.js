import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    _agencia;
    _numero;
    _cliente;
    _saldo;
    static totalDeContas = 0;

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this._numero = this.geraNumerConta();
        this.cliente = cliente;
        this._saldo = 0;
        ContaCorrente.totalDeContas += 1;
    }

    set agencia(agencia) {
        this._agencia = agencia;
    }

    geraNumerConta() {
        return (ContaCorrente.totalDeContas + 1);
    }

    set cliente(cliente) {
        if(cliente instanceof Cliente)
            this._cliente = cliente;
        else
            console.log("Cliente informado não é um cliente!");
    }
    
    depositar(valor) {
        if(valor <= 0)
            return;
        
        this._saldo += valor;
    }

    sacar(valor) {
        if(valor > this._saldo)
            return;
        
        this._saldo -= valor;

        return valor;
    }

    transferir(valor, contaDestino) {
        const valorSacado = this.sacar(valor);
        contaDestino.depositar(valorSacado);
    }

    get agencia() {
        return this._agencia;
    }

    get numero() {
        return this._numero;
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }
}