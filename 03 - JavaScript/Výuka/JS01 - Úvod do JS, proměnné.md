# Úvod do JS, práce s proměnnými
## Co je to JavaScript?

* JavaScript je dynamický programovací jazyk, který přidává interaktivitu a dynamiku na webové stránky.
* Hlavní role JavaScriptu na webové stránce
    * Reagovat na akce uživatele (např. kliknutí na tlačítko).
    * Validovat formuláře nebo zpracovávat data přímo na straně uživatele.
    * Animovat prvky a měnit obsah stránky bez nutnosti jejího obnovení.
* Rozdíl oproti HTML a CSS:
    * HTML definuje strukturu stránky.
    * CSS určuje její vzhled.
    * JavaScript zajišťuje interaktivitu a logiku.
* Význam v moderním webu:
    * JavaScript pohání většinu interaktivních funkcí, které na webech používáme.

## Vládání JS do HTML
* Přímo v HTML
```HTML
<script>
    console.log("Hello world!");
</script>    
```

* Externí soubor
```HTML
<script src="script.js"></script>
```
```JavaScript
console.log("Hello world!");
```

## Proměnné - způsoby vytvoření

Existují 3 způsoby zápisu proměnných

### let
Základní proměnná, kterou později lze přespsat

```JavaScript
let brainrot = "skibidi"
```

Později můžeme tuto hodnotu přepsat (není potřeba znovu deklarovat proměnnou)

```JavaScript
brainrot = "mango"
```

### const

Proměnná, jejíž hodnotu nemůžeme přepsat.

```JavaScript
const brainrot = "skibidi"
```

### var

Zastaralý způsob deklarace proměnné, doporučuji nepoužívat.

ChatGPT strašně rád hází kódy s tímto způsobem deklarace proměnných, tudíž díky tomu poznám podvádění :)

Je možné taky vidět ve starých kódech na internetu.

Funguje podobně jako let

```JavaScript
var brainrot = "skibidi"
```

## Proměnné - datové typy

### string

Text, psaný v uvozovkách

```JavaScript
let jmeno = "Spytihněv"
```

### int

Celé číslo (bez desetinné tečky), psáno bez uvozovek

```JavaScript
var hodnota = 420
```

### float / double

Desetinné číslo, psáno bez uvozovek (používáme desetinnou tečku)

```JavaScript
var hodnota = 3.14
```

### boolean

Hodnota true/false

```JavaScript
var chillGuy = true
```