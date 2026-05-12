//Anzeigen in der Console in den Entwicklertools
console.log("test");
let a = 5;
let b = "hallo";
let c = a + b;
 
console.log(a);
console.log(c);
 
//Funktionen + zuweisen
function add(a,b,c) {
    return a+b+c;
}
 
let d = add(1,2);
console.log(d);
 
const add2 =add;
console.log(add2)
console.log(add2(2,3))
 
// andere Schreibweise für funktionen
const sub = (a,b)=> a-b;
const sub2 = (a,b)=> {return a-b};
console.log(sub2)
console.log(sub2(2,3))
 
//Nan Not a number
console.log(sub2(2))
console.log(sub2(1,2,3))
 
 
//arrays
const ar=Array();
ar[0]=2;
ar[1]=5;
ar[2]="test";
ar[3]=add(1,2,3);
ar[4]=add;
console.log(ar);
console.log(typeof ar);
let z = ar[4](2,3,4);
console.log(z);
 
//platzhalter und a mit reste Parameter, ... macht immer ein Array
function add3(...a) {
    console.log(a);
    let idx=0;
    let zwischensumme = 0;
    while(idx<a.length){
        zwischensumme += a[idx];
        idx++;
    }
    return zwischensumme;
}
 
console.log(add3(1));
console.log(add3(1,2));
console.log(add3(1,2,3));
console.log(add3(1,2,3,4));
 
//forEach Schleife, iteriert über alle Elemente eines Arrays
const f = [1,2,3,4]
    let zwischensumme = 0;
    for(let idx=0; idx<a.length; idx++){
        zwischensumme += a[idx];
    }
 
function print(wert) {
    console.log(wert);
}
//arrow schreibweise, gleiche wie funktion print, aber kürzer
function print2(wert) {
    console.log(wert);
}
    f.forEach(print);
//foreach mit arrow funktion
    f.forEach((wert) => {
        console.log(wert)
    });
 
    zwischensummer2 = 0;
     f.forEach((wert) => {
        zwischensummer2 += wert;
    });
    console.log(zwischensummer2);
 
//filter, filtert alle Elemente eines Arrays, die eine Bedingung erfüllen
const i = [1,2,3,4];
let i2 = i.filter((wert) => {
    //if(wert%2==0){ return true}
   // else {return false}
    return wert%2==0;
});
console.log(i2);
 
//kürzer
const u = [1,2,3,4];
let u2 = u.filter((wert) => {
    return wert%2==0;
});
console.log(u2);
 
//noch kürzer, da nur eine Zeile
const p = [1,2,3,4];
let p2 = p.filter(wert => wert%2==0);
console.log(p2);
 
//find
const q = [1,2,3,4];
let q2 = q.find(wert => wert%2==0);
console.log(q2);
 
//map
const r = [1,2,3,4];
let r2 = r.map(wert => wert%2==0);
console.log(r2);
 
//map autos bmw, mercedes und fiat (gross schreiben)
const cars = ["bmw", "mercedes", "fiat"];
let cars2 = cars.map(car => car.toUpperCase());
console.log(cars2);
 
//reduce, reduziert ein Array auf einen Wert, z.B. die Summe aller Elemente
const s = [1,2,3,4]; //wenn im array eine zahl als string gesetzt wird, wird alles als String gewertet ergebnis dann 1234 und nicht 10
let s2 = s.reduce((alterzwischenstand, wert) => alterzwischenstand + wert, 0);
console.log(s2);
 
 
//div geändert mit diesen befehlen im html
document.getElementById("derButton").addEventListener("click", function() {
    document.getElementById("dasDiv").innerText = "Der Button wurde geklickt!"
});

//d