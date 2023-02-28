window.alert("Inserisci dei valori e calcolerò la media. Inserisci 0 per terminare l'inserimento");

let value = null;
let arrayValue=[];

while (value!=0) {
    value = parseInt(prompt("Inserisci numero: "));

    if(!isNaN(value)){
        arrayValue.push(value)
    }
}
arrayValue.pop(); //remove last elem in array

let sum = 0;

for (let i = 0; i < arrayValue.length; i++) {
    sum += arrayValue[i];
}

let average = sum/arrayValue.length;

window.alert("La media è: "+average);

console.log(arrayValue);