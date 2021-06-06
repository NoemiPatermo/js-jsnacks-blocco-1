//Chiedi un numero di 4 cifre all’utente
//e calcola la somma di tutte le cifre che compongono il numero.
//(bonus: controllate che il numero sia realmente di 4 cifre altrimenti restituite un alert)

var userNumber = prompt ("inserire un numero di 4 cifre");
var sum = 0;
if (userNumber.length !==4){
    alert ("Attento! Il numero deve essere di 4 cifre!")
}else if(isNaN(userNumber)){
    alert ("Inserisci un numero")

}else{
    for(i = 0; i < userNumber.length; i++){
        sum += parseInt(userNumber[i]);
    }
    document.getElementById('result').innerHTML += sum;
} 

/*CORREZIONE CON OTTAVIO
var userNumber = prompt ("inserisci un numero");
inputLen = userNumber.length;

if(inputLen !== 4){
    alert("Ehi, devi inserire un numero di 4 cifre!")
}else if(isNaN(userNumber)){
    alert(Attento! Inserisci un numero!)
}else{
    var result = 0;
    for(var i = 0; i < inputLen; i++){
    result += pareseInt(userNumber[i]);
}
    console.log(result);
}

NaN ti sta dicendo che non è un numero anche se prova a fare ugualmete le operazione (in quesro caso aver inserito 
    una parola di 4 lettere)
-------------------------------------------------------------------------------
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