// snack 3
//il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
var result = 0;
for( var x = 1; x <= 10; x++){
    var num = parseInt(prompt('Inserisci un numero'));
    result += num;
}
document.getElementById('result').innerHTML = " Il risultato è : " + result;

//dentro il for puoi anche inserire il prompt.
//dentro il for hai le istruzioni che vuoi vengano eseguite.
// ad ogni step il tuo result aumenta in base al valore che riceve dalla tua variabile num 
//che si somma ad ogni step
//alla fine del for il result ti darà la somma