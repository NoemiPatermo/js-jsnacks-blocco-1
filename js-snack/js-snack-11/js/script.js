// snack 11
//Inserisci un numero, se è pari stampa il numero,
//se è dispari stampa il numero successivo

var num = parseInt(prompt('inserisci un numero')); 
if (num % 2 !== 0){
    document.getElementById('result').innerHTML = num;
}else {
    document.getElementById('result').innerHTML = (num + 1);
}