const zahlen=[1,2,3,4,5,7,2,3,4];

/*
function istGeradeZahl(zahl){
    if(zahl % 2 == 0 ){
        return true;
    }else{
        return false;
    }
}

const istGeradeZahl = (zahl) => {
    if(zahl % 2 == 0 ){
        return true;
    }else{
        return false;
    }    
}

const geradezahl=zahlen.filter((zahl) => {
    if(zahl % 2 == 0 ){
        return true;
    }else{
        return false;
    }    
});

const geradezahl=zahlen.filter((zahl) => {
    return(zahl % 2 == 0 );
});
*/

/*
const geradezahl=zahlen.filter((zahl) => {
    return !(zahl % 2 );
});

geradezahl.forEach( (zahl) => {
    console.log(zahl);
} );

/*console.log(geradezahl);*/
/*
const max = zahlen.reduce((alte_nummer, aktuelle_nummer) => {
if( alte_nummer > aktuelle_nummer ){
    return alte_nummer;
}else {
    return aktuelle_nummer;
}
});

console.log(max);
*/



/*
const inhaltVonDatei=(filename) => {
return { inhalt:"Hallo", fehler:false};
};

console.log(
    inhaltVonDatei("Test.txt").inhalt
)
*/



/*
const wt2 = {
    dozent:"Rene",
    studenten:["Tim","Pedro","Kris"]
}
wt2.raum="301";

const pf = {
    dozent:"JP",
    studenten: "keine",
    raum: "324"
}

const kurse = [wt2,pf];

console.log(kurse);
*/


/*
function Kurs(dozent, raum, studenten){
    this.dozent = dozent;
    this.raum = raum;
    this.studenten = studenten;
    this.raumgroesse = () => {
        return this.studenten.length;
    }
}
*/

import { Kurs } from "./kurs.js";
const wt2 = new Kurs("Rene", "301", ["Tim","Pedro","Kris"] );
const pf = new Kurs("JP", "324", "keine");


const kurse = [wt2, pf];

console.log(wt2.raumgroesse());


window.addEventListener("load", () => {
    const button = document.getElementById("b1");
    button.addEventListener("click", () => {
        
        fetch("wt2.json")
            .then( (response) => {
                return response.json();
            })
            .then( (json) => {
                const div = document.getElementById("q1");
                div.innerText = json.dozent;
            } )   


    });  
});