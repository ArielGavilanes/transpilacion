var arielGavilanes = /** @class */ (function () {
    function arielGavilanes() {
    }
    arielGavilanes.prototype.saludo = function () {
        document.write("Hola soy " + this.name + " " + this.lastName + " y tengo " + this.age + " años");
    };
    return arielGavilanes;
}());
var personalData = new arielGavilanes;
personalData.name = "Ariel",
    personalData.lastName = "Gavilanes",
    personalData.age = 19,
    personalData.phoneNumber = 987636137,
    personalData.adress = "Colinas del Norte",
    personalData.cedula = 1728851997,
    personalData.postalCode = 17135;
personalData.saludo();
console.log(personalData);
