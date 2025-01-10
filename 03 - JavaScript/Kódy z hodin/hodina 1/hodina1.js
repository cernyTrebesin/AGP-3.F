console.log("Hello World!"); //Výpis do konzole
//  komentář na řádek
/*
    Víceřádkový komentář
*/

let promenna; // definice proměnné
promenna = 3; // přidání hodnoty 3 do proměnné
console.log(promenna); // Vypsání proměnné
promenna = 5; // přepsání hodnoty v proměnné
console.log(promenna); // Vypsání nové hodnoty

let cislo = 3; // definice proměnné a přidání hodnoty na jednom řádku

const cislo2 = 2; // proměnná, jejíž hodnota nemůže být změněna
//console.log(cislo2);
/*
cislo2 = 5; Tento řádek vyhodí chybu
console.log(cislo2);
*/

var nepouzivat = 5; // var je zastaralý, nepoužívat
//console.log(nepouzivat);
nepouzivat = 3;
//console.log(nepouzivat);

// datové typy
let celeCislo = 5; // celočíselná proměnná int
let desetineCislo = 3.14; // proměnná s desetiným číslem float/double
let text = "skibidi"; // proměnná s textem string
let bool = true; // proměnná bollean, může nabývat pouze 2 hodnot (true/false)

let text1 = "Low";
let text2 = "Taper";
let text3 = "Fade";

console.log(text1 + " " + text2 + " " + text3); // spojování textů pomocí +
console.log(`${text1} ${text2} ${text3}`); //spojování pomocí interpolace ($ alt gr + ů),({} alt gr + b), (`` alt gr + ý)

let velkyText = text1 + " " + text2 + " " + text3; // uložení spojení textu do proměnné
// console.log(velkyText);

let a = 5; // založení celočíselné proměnné
let b = 8;
let c = a + b; // sčítání
c = a - b; // odečítání
c = a * b; // násobení
c = a / b; // dělení
c = a % b; // modulo (zbytek po dělení)
//console.log(c);

c = a + " " + text1; // sčítání čísla a textu, do proměnné se přiřadí text
console.log(c);

console.log(5 + 5 * 10); // násobení má přednost
