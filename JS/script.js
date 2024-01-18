// Esto en HTML ↓ ....
// <button onclick="getInfoCreateObject()" class="btnAdd">Enviar</button>
// ... es igual a esto en JS ↓
//document.querySelector(".btnAdd").addEventListener("click", getInfoCreateObject)


let iCourse = document.querySelector("#course");
let iClass = document.querySelector("#class");

if (iCourse.disabled && iClass.disabled) {
    iCourse.style.backgroundColor = "#A5A5A5";
    iClass.style.backgroundColor = "#A5A5A5";
}

document.querySelector("#category").addEventListener("change", function() {
    let chosenCategory = document.querySelector("#category").value;
    
    if (chosenCategory === "estudiante") {
        iCourse.disabled = false;
        iClass.disabled = false;

        iCourse.style.backgroundColor = "#FFEBCC";
        iClass.style.backgroundColor = "#FFEBCC";
    } else {
        iCourse.disabled = true;
        iClass.disabled = true;

        iCourse.style.backgroundColor = "#A5A5A5";
        iClass.style.backgroundColor = "#A5A5A5";
    }
});
   
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

function limpiarCampos() {
    document.querySelector("#name").value = "";
    document.querySelector("#lastName1").value = "";
    document.querySelector("#lastName2").value = "";
    document.querySelector("#category").value = "";
    document.querySelector("#course").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#class").value = "";
}

function showAlert(){
    alert("Datos enviados correctamente");
}

function addAlertInfo(){
    alert("Lista cargada correctamente");
}

function savedList(){
    alert("Lista guardada correctamente");
}

function getInfoCreateObject() {
    let eachName = document.querySelector("#name").value;
    let eachLastName1 = document.querySelector("#lastName1").value;
    let eachLastName2 = document.querySelector("#lastName2").value;
    let eachCategory = document.querySelector("#category").value;
    let eachCourse = document.querySelector("#course").value;
    let eachMail = document.querySelector("#email").value;
    let eachClass = document.querySelector("#class").value;

    // agregamos todo eso al objeto
    let person = new Person(eachName, eachLastName1, eachLastName2, eachCategory, eachCourse, eachMail, eachClass);
    // agregamos person al array people (previamente inicializado sin contenido)
    people.push(person);
    // Mostramos el array por consola para comprobar que funciona
    console.log(people); 
    
    // llamamos a la función appendSection() mandándole como parámetro el array people, que ya sí tiene datos dentro
    appendSection(people);


    
}


function appendSection(arrayPeople) {

    arrayPeople.forEach(function(eachObject) {
        // crear la section
        let createdSection = document.createElement("section");
        // append nueva section a #list
        let list = document.querySelector("#list");
        list.append(createdSection);
        // ponerle clase a la section
        createdSection.classList.add("listRecords");
        // averiguamos el largo del objeto para luego iterar sobre ese número
        let objectLength = Object.entries(eachObject).length;
        console.log("Largo objecto antes de agregar párrafos: " + objectLength);
        // crear los 7 párrafos

        for (const [key, value] of Object.entries(eachObject)) {
            let par = document.createElement("p");
            par.textContent = value;
            createdSection.append(par);
        }
     });

        



}




