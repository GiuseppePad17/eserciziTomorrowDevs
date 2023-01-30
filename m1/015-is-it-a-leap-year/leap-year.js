window.alert("Inserisci un anno e ti dirò se è un anno bisestile oppure no");
//l'utente inserisce l'anno
let year = parseInt(prompt("inserisci anno: "));


if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            window.alert("l'anno "+year+" è bisestile");
        } else{
            window.alert("l'anno "+year+" NON è bisestile");
        }
    }else{
        window.alert("l'anno "+year+" è bisestile");
    }
} else{
    window.alert("l'anno "+year+" NON è bisestile");
}
