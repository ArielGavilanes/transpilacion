class arielGavilanes {
    public name: string;
    public lastName: string;
    public age: number;
    public phoneNumber: number;
    public adress: string;
    public cedula: number;
    public postalCode: number;

    saludo() {
        document.write("Hola soy " + this.name + " " + this.lastName + " y tengo " + this.age + " años")
    }
}

let personalData = new arielGavilanes
    personalData.name = "Ariel",
    personalData.lastName = "Gavilanes",
    personalData.age = 19,
    personalData.phoneNumber = 987636137,
    personalData.adress = "Colinas del Norte",
    personalData.cedula = 1728851997,
    personalData.postalCode = 17135

personalData.saludo();

console.log(personalData)