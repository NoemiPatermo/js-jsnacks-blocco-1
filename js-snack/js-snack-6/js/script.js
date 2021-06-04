// snack 6
//Stampa il cubo dei primi N numeri,
//dove N è un numero indicato dall’utente attraverso un prompt.

    var N = parseInt(prompt("Inserisci un numero")); 
    var cubic; 
    for (var x = 0; x <= N ; x++){
        var cubic = Math.pow( x, 3);
    }
    document.getElementById("result").innerHTML = Math.pow(N, 3);
 