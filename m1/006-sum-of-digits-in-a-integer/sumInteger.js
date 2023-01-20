
var num = prompt("Inserisci un numero di 4 cifre, se ne inserisci di più non le calcolerò");

var digits = num.toString().split('');
var realDigits = digits.map(Number);


console.log(realDigits);

//se l'utente inserisce più numeri non te li conta
var result = realDigits[0]+realDigits[1]+realDigits[2]+realDigits[3];

window.alert(realDigits[0]+"+"+realDigits[1]+"+"+realDigits[2]+"+"+realDigits[3]+"="+result);
