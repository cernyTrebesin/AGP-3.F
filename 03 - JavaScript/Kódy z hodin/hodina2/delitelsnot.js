let cislo = window.prompt("Zadej číslo");
let del = window.prompt("Zadej číslo");

if(cislo % del === 0){
    alert(cislo + " je dělitelné " + del);
}else{
    alert(cislo + " není dělitelné " + del);
}