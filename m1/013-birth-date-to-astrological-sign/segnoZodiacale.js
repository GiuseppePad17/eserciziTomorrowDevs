var mese = prompt("Inserisci mese di nascita");
var giorno = prompt("inserisci giorno di nascita");

var segniZodiacali =[
    "Capricorno",
    "Acquario",
    "Pesci",
    "Ariete",
    "Toro",
    "Gemelli",
    "Cancro",
    "Leone",
    "Vergine",
    "Bilancia",
    "Scorpione",
    "Sagittario",
];

switch (mese) {
    case mese="gennaio":

        if (giorno>=1 && giorno<=19 ) {
            window.alert("il tuo segno zodiacale è: "+segniZodiacali[0]);
        }else if(giorno>=20 && giorno<=31){
            window.alert("il tuo segno zodiacale è: "+segniZodiacali[1]);
        }
        
        break;

        
    case mese="febbraio":

        if (giorno>=1 && giorno<=18 ) {
            window.alert("il tuo segno zodiacale è: "+segniZodiacali[1]);
        }else if(giorno>=19 && giorno<=29){
            window.alert("il tuo segno zodiacale è: "+segniZodiacali[2]);
        }
        
        break;
        
    case mese="marzo":
        
        if (giorno>=1 && giorno<=20 ) {
            window.alert("il tuo segno zodiacale è: "+segniZodiacali[2]);
        }else if(giorno>=21 && giorno<=31){
            window.alert("il tuo segno zodiacale è: "+segniZodiacali[3]);
        }

        break;
        
    case mese="aprile":
        
        if (giorno>=1 && giorno<=19 ) {
            window.alert("il tuo segno zodiacale è: "+segniZodiacali[3]);
        } else if(giorno>=20 && giorno<=30){
            window.alert("il tuo segno zodiacale è: "+segniZodiacali[4]);
        }
        break;
        
    case mese="maggio":
        
        if (giorno>=1 && giorno<=20 ) {
            window.alert("il tuo segno zodiacale è: "+segniZodiacali[4]);
        }else if(giorno>=21 && giorno<=31){
            window.alert("il tuo segno zodiacale è: "+segniZodiacali[5]);
        }

        break;
        
    case mese="giugno":
        
        if (giorno>=1 && giorno<=20 ) {
            window.alert("il tuo segno zodiacale è: "+segniZodiacali[5]);
        }else if(giorno>=21 && giorno<=30){
            window.alert("il tuo segno zodiacale è: "+segniZodiacali[6]);
        }

        break;
        
    case mese="luglio":
        
        if (giorno>=1 && giorno<=22 ) {
            window.alert("il tuo segno zodiacale è: "+segniZodiacali[6]);
        }else if(giorno>=23 && giorno<=31){
            window.alert("il tuo segno zodiacale è: "+segniZodiacali[7]);
        }

        break;
        
    case mese="agosto":
        
        if (giorno>=1 && giorno<=22 ) {
            window.alert("il tuo segno zodiacale è: "+segniZodiacali[7]);
        }else if(giorno>=23 && giorno<=31){
            window.alert("il tuo segno zodiacale è: "+segniZodiacali[8]);
        }

        break;
        
    case mese="settembre":
        
        if (giorno>=1 && giorno<=22 ) {
            window.alert("il tuo segno zodiacale è: "+segniZodiacali[8]);
        }else if(giorno>=23 && giorno<=30){
            window.alert("il tuo segno zodiacale è: "+segniZodiacali[9]);
        }

        break;
        
    case mese="ottobre":
        
        if (giorno>=1 && giorno<=22 ) {
            window.alert("il tuo segno zodiacale è: "+segniZodiacali[9]);
        }else if(giorno>=23 && giorno<=31){
            window.alert("il tuo segno zodiacale è: "+segniZodiacali[10]);
        }

        break;
        
    case mese="novembre":
        
        if (giorno>=1 && giorno<=21 ) {
            window.alert("il tuo segno zodiacale è: "+segniZodiacali[10]);
        }else if(giorno>=22 && giorno<=30){
            window.alert("il tuo segno zodiacale è: "+segniZodiacali[11]);
        }

        break;
        
    case mese="dicembre":

        if (giorno>=1 && giorno<=21 ) {
            window.alert("il tuo segno zodiacale è: "+segniZodiacali[11]);
        }else if(giorno>=22 && giorno<=31){
            window.alert("il tuo segno zodiacale è: "+segniZodiacali[12]);
        }

        break;

    default:
        break;
}