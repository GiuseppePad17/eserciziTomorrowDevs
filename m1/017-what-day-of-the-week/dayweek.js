window.alert("Inserisci un anno e ti dirò che giorno è il primo Gennaio");
let year = parseInt(prompt("Inserisci anno: "));

let day_of_the_week = (year + Math.floor((year-1) / 4) - Math.floor((year-1) / 100) + Math.floor((year-1) / 400)) % 7;

console.log(day_of_the_week);

switch (day_of_the_week) {
    case 0:
      alert( 'Domenica' );
      break;
      case 1:
      alert( 'Lunedì' );
      break;
      case 2:
      alert( 'Martedì' );
      break;
    case 3:
      alert( 'Mercoledì' );
      break;
    case 4:
      alert( 'Giovedì' );
      break;
    case 5:
      alert( 'Venerdì' );
      break;
    case 6:
        alert( 'Sabato' );
        break;
    default:
      alert( "Valore non valido" );
  }