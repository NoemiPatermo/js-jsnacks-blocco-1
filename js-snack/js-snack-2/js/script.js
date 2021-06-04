//snack 2
//l'utente inserisce due parole in successione con due prompt
//il software stampa prima la parola più corta poi quella lunga

var firstWord = prompt ("inserisci una parola");
var secondWord = prompt("inserisci una seconda parola");

if (firstWord.length > secondWord.length){
    document.getElementById("result").innerHTML = secondWord + " " + firstWord;
} else if(secondWord.length > firstWord.length) {
    document.getElementById("result").innerHTML = firstWord + " " +  secondWord;
}else{
    document.getElementById("result").innerHTML = firstWord + " stessa lunghezza" +  secondWord;
}
    

