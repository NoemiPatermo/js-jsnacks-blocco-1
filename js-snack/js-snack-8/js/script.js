//Chiedi un numero di 4 cifre all’utente
//e calcola la somma di tutte le cifre che compongono il numero.
//(bonus: controllate che il numero sia realmente di 4 cifre altrimenti restituite un alert)

var askNumber = prompt ("inserire un numero di 4 cifre");
var sum = 0;
if (askNumber.length !==4){
    alert ("Attento! Il numero deve essere di 4 cifre!")
}else if(isNaN(askNumber)){
    alert ("Inserisci un numero")

}else{
    for(i = 0; i < askNumber.length; i++){
        sum += parseInt(askNumber[i]);
    }
    document.getElementById('result').innerHTML += sum;
} 


//continua a chiedere la cifra col prompt finchè non è di 4 cifre
/* avvia il while

var askNumber = prompt("Inserisci un numero di 4 cifre");
var sum = 0;
while (askNumber.lenght < 4 ){
   askNumber= prompt ("inserire numero di 4 cifre");
} 
for(i = 0; i < askNumber.length; i++){
     sum += parseInt(askNumber[i]);
}
document.getElementById('result').innerHTML += sum; */