//snack 1 
//utente inserisce due numeri in successione, con due prompt, il software stampa il maggiore

var xNum = parseInt(prompt("inserisci un numero"));
var yNum = parseInt(prompt("inserisci altro numero"));

if (xNum < yNum){
    document.getElementById("result").innerHTML =  yNum  +  " è maggiore ";
} else if(xNum === yNum) {
    document.getElementById("result").innerHTML = " il numero è pari";
} else {
    document.getElementById("result").innerHTML =  xNum  +  " è maggiore ";
}