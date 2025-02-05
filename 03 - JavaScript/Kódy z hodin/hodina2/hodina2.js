let text = document.querySelector("#text"); // můžu uložit vše
let text1 = document.getElementById("text"); // můžu uložit pouze id
text.innerText = "AGP je můj nejoblíbenější předmět"; // změna textu

text.style.color = "orange"; // změna barvy textu pomocí css

// vstup od uživatele skrz vyskakovací okno
let odpoved = window.prompt("Zadej jestli chceš barvu modrou nebo zelenou");

if (odpoved === "modrou"){
    text.style.color = "blue";
} else if (odpoved === "zelenou"){
    text.style.color = "green";
}


if (odpoved === "modrou"){
    text.style.color = "blue";
}

if (odpoved === "zelenou"){
    text.style.color = "green";
}