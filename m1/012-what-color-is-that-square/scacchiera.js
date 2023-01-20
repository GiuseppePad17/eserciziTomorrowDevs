var black="black";
var white="white";

var row = new Array(7);
var column = new Array(7);


console.log(row);
console.log(column);


var positionRow = prompt("inserisci posizione riga");
var positionColumn = prompt("inserisci posizione colonna");

Number(positionRow);
Number(positionColumn);


console.log("riga: "+positionRow);
console.log("colonna: "+positionColumn);


if(positionRow<0 || positionColumn<0){      //controllo del numero negativo
    window.alert("hai inserito un numero negativo o non valido. Accetto solo numeri positivi. Riprova")
}else{

    if(positionRow%2==0 && positionColumn%2==0){  //entambi pari
        window.alert("il quadrato è Nero")
    }else if(positionRow%2!=0 && positionColumn%2!=0){  //entambi dispari
        window.alert("il quadrato è Nero")
    }else{
        window.alert("il quadrato è Bianco")        // se un numero è pari e l'altro è dispari
    }  
    
}



