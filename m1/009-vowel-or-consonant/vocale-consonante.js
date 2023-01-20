for(i=0; i<1; i++){
    var carattere = prompt("inserisci una lettera");
}

console.log(carattere);

if (carattere=="a" || carattere=="e" || carattere=="i" || carattere=="o" || carattere=="u") {
    window.alert("la lettera è una vocale");
}else if(carattere=="y"){
    window.alert("a volte Y è una vocale ma altre volte potrebbe essere anche una consonante");
}else{
    window.alert("il carattere è una consonante");
}