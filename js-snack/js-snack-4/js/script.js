//snack 4
//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
//chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
var listaInvitati = ['Noemi', 'Pietro', 'Eliana', 'Antonio'];
var invitato = prompt("Prego, il suo nome? In modo da poter controllare se Lei è nella lista degli invitati.");

var flag = false;

for(var i = 0; i < listaInvitati.length; i++){
    if(invitato === listaInvitati[i]){
        flag = true;
    }
}
if(flag){
    document.getElementById('result').innerHTML = "Benvenuto! Gatsby è lieta di averla alla sua festa!";
} else{
    document.getElementById('result').innerHTML = "Mi dispiace! Lei non può entrare!";
}