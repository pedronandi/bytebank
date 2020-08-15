export class ContaCorrente {
    agencia;
    _saldo = 0;

    depositar(valor) {
        if(valor <= 0)
            return;
        
        this._saldo += valor;
    }

    sacar(valor) {
        if(valor > this._saldo)
            return;
        
        this._saldo -= valor;
    }

    getSaldo() {
        return this._saldo;
    }
}