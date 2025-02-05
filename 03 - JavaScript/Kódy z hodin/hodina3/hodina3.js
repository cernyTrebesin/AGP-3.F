let nadpis1 = document.querySelector("#nadpis1");
let odstavec = document.querySelector("#odstavec");
let nadpis2 = document.querySelector("#nadpis2");

function upravNadpis(){
    nadpis1.style.color = "green";
    nadpis1.style.backgroundColor = "orange"
    nadpis1.style.fontSize = "50px"
}

//upravNadpis();

function upravText(prvek){
    prvek.style.color = "orange";
    prvek.style.backgroundColor = "aqua";
    prvek.style.fontSize = "80px";
}

//upravText(odstavec);
upravText(nadpis1);
//upravText(nadpis2);