import{Cliente} from "./Cliente.js"
import{ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo",11122233309); //usando o accessor Construtor
const cliente2 = new Cliente("Alice",11122233307);   

cliente1.ContaCorrente = new ContaCorrente(cliente1.nome,1);//usando o accessor Construtor
cliente2.ContaCorrente = new ContaCorrente(cliente2.nome,1);


// Operação no front
cliente1.ContaCorrente.depositar(500);
cliente1.ContaCorrente.transferir(200, cliente2.ContaCorrente);
cliente1.ContaCorrente.depositar(100);
cliente1.ContaCorrente.depositar(100);

//Prints resultado
console.log("-----------------------------------------------------------------------");
const valorSacado = cliente1.ContaCorrente.sacar(50);
console.log(cliente1);
console.log(cliente1.ContaCorrente);
console.log("O valor de R$" + valorSacado+ " foi sacado por Ricardo");
console.log("-----------------------------------------------------------------------");
const valorSacado2 = cliente2.ContaCorrente.sacar(25);
console.log(cliente2);
console.log(cliente2.ContaCorrente);
console.log("O valor de R$" + valorSacado2+ " foi sacado por Alice");
console.log("-----------------------------------------------------------------------");
console.log("Numero total de contas: "+ ContaCorrente.numeroDeContas);
