//l'utente inserisce le singole durate
let days = prompt("inserisci giorni: ");
let hours = prompt("inserisci ore: ");
let minutes = prompt("inserisci minuti: ");
let seconds = prompt("inserisci secondi: ");

//le durate inserite vengono convertite in secondi
let daySeconds = days*86400;
let hourSeconds = hours*3600;
let minuteSeconds = minutes*60;
let secondSeconds = seconds*1;

//tutti i secondi vengono sommati
let totalSeconds = daySeconds+hourSeconds+minuteSeconds+secondSeconds;

//vengono stampati i secondi totali del tempo inserito
window.alert("la durata inserita ha: "+totalSeconds+" secondi");