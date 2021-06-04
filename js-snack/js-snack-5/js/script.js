// snack 5
//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,
//se è dispari inseriscilo nell’array.
var myList = [];
for (var i = 1; i <= 6; i++){
    var num = parseInt(prompt('inserisci un numero'));
    if(num % 2 !== 0){
        myList.push(num);
    }
}
document.getElementById('result').innerHTML = myList;

//num % 2 === 0      è pari
// nume % 2 !== 0    è dispari perchè il resto del num/2 non è uguale a zero