window.alert("Ti mostro il giorno successivo in base alla data inserita");
// l'utente inserisce il giorno
let day = parseInt(prompt("inserisci il giorno: "));
//controllo se il giorno non si anegativo o superiore a 31
if(day <=0 || day >31){
    window.alert("Giorno non valido");
}

// l'utente inserisce il mese
let mounth = parseInt(prompt("inserisci il mese: "));
//controllo del mese
if(mounth <=0 || mounth >12){
    window.alert("Mese non valido");
}
// l'utente inserisce l'anno
let year = parseInt(prompt("inserisci l'anno: "));
// controllo anno
if(year <0){
    window.alert("Anno non valido");
}

//stampo la data inserita
window.alert("Data inserita: "+day+"-"+mounth+"-"+year);


if(day==31){
    day = 1;
    mounth++;

    if(mounth==13){
        mounth = 1;
        year++;
        window.alert("Il giorno succesivo è : "+day+"-"+mounth+"-"+year);
    }else{
        mounth++;
        window.alert("Il giorno succesivo è : "+day+"-"+mounth+"-"+year);
    }

} else{
    day++;
    window.alert("Il giorno succesivo è : "+day+"-"+mounth+"-"+year);
}