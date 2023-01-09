let bottleMIN = prompt("Quante bottiglie da un litro o inferiori vuoi inserire?: ");
let bottleMAX = prompt("Quante bottiglie maggiori di un litro vuoi inserire?: ");

let money = (0.10*bottleMIN)+(0.25*bottleMAX);

window.alert("ecco a te il tuo denaro: "+money+"$");