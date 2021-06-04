// snack 10
//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
//Esegui questo programma in due versioni, con il for e con il while.

var result = 0;

for (var x = 1; x <= 5; x++){
    var num = parseInt(prompt('inserisci un numero'));
    result += num;
}
document.getElementById('result').innerHTML = " Il risultato è : " + result;


/*COL WHILE
var somma = 0;
var x = 1;


while (x <= 5){
    var num = parseInt(prompt('inserisci un numero'));
    somma += num;
    x++;
} 
console.log('somma while' ') +  somma;*/