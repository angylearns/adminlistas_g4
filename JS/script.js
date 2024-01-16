let people = [];

function Person(nom, ap1, ap2, cat, cur, mail, clase){
    this.name = nom;
    this.last1 = ap1;
    this.last2 = ap2;
    this.category = cat;
    this.course = cur;
    this.email = mail;
    this.clas = clase;
}

function addText() {
    let eachName = document.querySelector("#name").value;
    let eachLastName1 = document.querySelector("#lastName1").value;
    let eachLastName2 = document.querySelector("#lastName2").value;
    let eachCategory = document.querySelector("#category").value;
    let eachCourse = document.querySelector("#course").value;
    let eachMail = document.querySelector("#email").value;
    let eachClass = document.querySelector("#class").value;

    let person = new Person(eachName, eachLastName1, eachLastName2, eachCategory, eachCourse, eachMail, eachClass);
    people.push(person);
    console.log(people); // Mostramos el array por consola para comprobar que funciona






    // AQUÍ TENEMOS QUE METER LA FUNCIÓN DE LIMPIAR CAMPOS


}

function appendSection() {
    for (let i = 0; i < people.length; i++) {
        for (let j = 0; j < people[i].lenght; j++) {
            // aquí tenemos que create una section y luego los párrafos que van a albergar los datos del objeto
        }
    }
}