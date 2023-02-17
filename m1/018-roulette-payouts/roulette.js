//-1 = 00
const greenNumber = [-1, 0];
const redNumber = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
const blackNumber = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];

//Getting a random integer between two values
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

window.alert("start game roulette!!!");
let extractedNumber = getRandom(-1, 36);

console.log("The spin resulted in: "+extractedNumber);
console.log("Pay: "+extractedNumber);
if (extractedNumber != 0) {
    
    //controllo numero pari o dispari
    if(extractedNumber %2 == 0){
        console.log("Pay Even");
    }else{
        console.log("Pay Odd");
    }

    //controllo colore
    if(redNumber.includes(extractedNumber)){
        console.log("Pay Red");
    }else{
        console.log("Pay Black");
    }


} else{
    if (extractedNumber == 0) {
        window.alert("Pay 0");
    } else{
        window.alert("Pay 00");
    }
}