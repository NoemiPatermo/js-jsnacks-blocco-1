//Generatore di “nomi cognomi” casuali: 
//prendendo una lista di nomi e una lista di cognomi, 
//Gatsby vuole generare una falsa lista di 3 invitati.
var nameList = ["Noemi ", " Gabriele" , " Dayron ", " Massimo "];
var surnameList = ["Patermo ", " Sanna ", " Aguilera ", " Bergantin "];
var invitedList = [];

//il for avrebbe ripetuto il ciclo 3 volte. Se poniamo il caso, alla seconda ripetizione del ciclo
// l'invitato ha nome e cognome già esistenti, il ciclo viene ripetuto sempre 3 volte
// producendo array di due elementi che non è ciò che ci richiede la traccia.


//creato un indice random da associare al nome e uno per il cognome,
//come indice randomico e inserite come variabili dentro il while.

//con il WHILE, si ripete il ciclo finchè la condizione che tu detti è vera
// e di conseguenza rispettata, in questo caso che la lunghezza dell'array sia minore di 3
// quando la lunghezza raggiunge valore 3, si interrompe il ciclo

while(invitedList.length < 3 ){
    var randomName = nameList [Math.floor(Math.random() * nameList.length)];
    var randomSurname = surnameList [Math.floor(Math.random() * surnameList.length)];

    var invited = randomName + "  " + randomSurname;

    if(!invitedList.includes(invited)){
        invitedList.push(invited);      //se la lista invitato NON include l'invitato,
                                        //allora pusha l'invitato nella lista 
      document.getElementById('list').innerHTML += "<li>" + invited + "</li>";                          
    }

}