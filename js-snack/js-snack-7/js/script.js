// snack 7
//Stampa le potenze di 2 fino a 1000.
var cube = 1000;
for (var x = 1; x <= cube ; x++){
    var N = Math.pow( N, 2);
    document.getElementById("result").innerHTML += Math.pow(2, x) + '<br/>';
}
//dentro la formula del math pow devi invertire i valori
