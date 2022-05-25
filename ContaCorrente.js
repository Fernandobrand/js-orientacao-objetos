import { Cliente } from "./Cliente.js"; // ERRO: add ".js" no final do arquivo do modulo

export

class ContaCorrente{
    //atributos
    static numeroDeContas = 0; // atributo da classe inteira "static" 
    _cliente;
    agencia;
    _saldo;
    
    // acessores
    set cliente(novoValor){
        if(novoValor instanceof Cliente)
        this._cliente = novoValor;
    }

    get cliente(){
        return this._cliente
    }

    get saldo (){
        return this._saldo;
    } 

    constructor(cliente, agencia){
        this._cliente = cliente;
        this.agencia = agencia;
        this._saldo = 0;  
        ContaCorrente.numeroDeContas ++; // pois é u atributo estatico pertecente a ClassContaCorrente, não de uma conta especifica

    }

    //metodos
    sacar(valor){
        if(this._saldo>= valor){
            this._saldo -=valor;
            return valor;
        }
    }

    depositar(valor) {
        if(valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir (valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }


 
}