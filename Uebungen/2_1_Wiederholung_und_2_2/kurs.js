class Kurs {
    constructor(dozent, raum, studenten){
        this.dozent = dozent;
        this.raum = raum;
        this.studenten = studenten;
    }

    raumgroesse(){
        return this.studenten.length;
    }
}

export { Kurs };