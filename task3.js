class Tour {
    constructor(kol_human, kol_day, tarif) {
        this.kol_human = kol_human;
        this.kol_day = kol_day;
        this.tarif = tarif;
    }

    calculation() {
        return this.kol_human * this.kol_day * this.tarif;
    }
}
var italiyTour = new Tour(5, 7, 100);

console.log(turkeyTour);

console.log("Стоимость поездки: " + italiyTour.calculation());
