function Sotrud(name, otdel, num, zp) {
    this.name = name;
    this.otdel = otdel;
    this.num = "384567";
    this.zp = 2000;
}

var petrov = new Sotrud("Oleg", "IT", 384567, 2000);
console.log(petrov);

petrov.address = "Kyiv";
console.log(petrov.address);