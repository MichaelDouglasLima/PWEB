//Exercício 2

class Conta {
    constructor(nomeCorrentista, banco, numConta, saldo) {
        this._nomeCorrentista = nomeCorrentista;
        this._banco = banco;
        this._numConta = numConta;
        this._saldo = saldo;
    }

    set nomeCorrentista(value) {
        this._nomeCorrentista = value;
    }

    get nomeCorrentista() {
        return this._nomeCorrentista;
    }

    set banco(value) {
        this._banco = value;
    }

    get banco() {
        return this._banco;
    }

    set numConta(value) {
        this._numConta = value;
    }

    get numConta() {
        return this._numConta;
    }

    set saldo(value) {
        this._saldo = value;
    }

    get saldo() {
        return this._saldo;
    }
}

class ContaCorrente extends Conta {
    constructor(nomeCorrentista, banco, numConta, saldo, saldoEspecial) {
        super(nomeCorrentista, banco, numConta, saldo);
        this.saldoEspecial = saldoEspecial;
    }

    set saldoEspecial(value) {
        this._saldoEspecial = value;
    }

    get saldoEspecial() {
        return this._saldoEspecial;
    }
}

class ContaPoupanca extends Conta {
    constructor(nomeCorrentista, banco, numConta, saldo, juros, dataVencimento) {
        super(nomeCorrentista, banco, numConta, saldo);
        this._juros = juros;
        this._dataVencimento = dataVencimento;
    }

    set juros(value) {
        this._juros = value;
    }

    get juros() {
        return this._juros;
    }

    set dataVencimento(value) {
        this._dataVencimento = value;
    }

    get dataVencimento() {
        return this._dataVencimento;
    }
}

//Criando uma Conta Corrente
function criarContaCorrente() {
    var nomeCorrentista = document.getElementById("nome1").value;
    var banco = document.getElementById("banco1").value;
    var numConta = document.getElementById("numConta1").value;
    var saldo = document.getElementById("saldo1").value;
    var saldoEspecial = document.getElementById("saldoEspecial").value;

    var objContaCorrente = new ContaCorrente(nomeCorrentista, banco, numConta, saldo, saldoEspecial);

    alert(`Nome do Correntista: ${objContaCorrente.nomeCorrentista}\n
    Banco: ${objContaCorrente.banco}\n
    Número da Conta: ${objContaCorrente.numConta}\n
    Saldo: ${objContaCorrente.saldo}\n
    Saldo Especial: ${objContaCorrente.saldoEspecial}`);
}

//Criando uma Conta Poupança
function criarContaPoupanca() {
    var nomeCorrentista = document.getElementById("nome2").value;
    var banco = document.getElementById("banco2").value;
    var numConta = document.getElementById("numConta2").value;
    var saldo = document.getElementById("saldo2").value;
    var juros = document.getElementById("juros").value;
    var dataVencimento = document.getElementById("dataVencimento").value;

    var objContaPoupanca = new ContaPoupanca(nomeCorrentista, banco, numConta, saldo, juros, dataVencimento);

    alert(`Nome do Correntista: ${objContaPoupanca.nomeCorrentista}\n
    Banco: ${objContaPoupanca.banco}\n
    Número da Conta: ${objContaPoupanca.numConta}\n
    Saldo: ${objContaPoupanca.saldo}\n
    Juros: ${objContaPoupanca.juros}\n
    Data de Vencimento: ${objContaPoupanca.dataVencimento}`);
}