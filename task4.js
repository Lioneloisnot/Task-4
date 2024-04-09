string.prototype.uroven = "1";
string.prototype.printMe = function() {

    return "<h" + this.uroven + ">Ура!</h" + this.uroven + ">";
}

var s = new String();
s.uroven = prompt("Введите уровень заголовка (1, 2 ... 6):");
document.write(s.printMe());