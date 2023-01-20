var pane = prompt("Pagnotte di pane comprate dall'utente");

console.log("pagnotte di pane comprate dall'utente: "+pane);

console.log("prezzo normale: "+pane*3.49+"€");

var totaleSconto = (60/100)*(pane*3.49);

var scontoApplicato= ((2.09*100)/60)*pane;
console.log("sconto: "+scontoApplicato);
console.log("prezzo totale scontato: "+totaleSconto+"€");