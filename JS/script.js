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


    // AQUÍ TENEMOS QUE LLAMAR TAMBIÉN A LA FUNCIÓN DE LIMPIAR CAMPOS
}

function appendSection(arrayPeople) {
    
    // recorremos el arrayPeople y en cada iteración creamos una función anónima (porque no tiene nombre) a la que le mandamos un parámetro eachObject que lo saca el propio forEach (porque al iterar, nos devuelve cada objecto que está dentro del array)
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
        console.log("Largo objecto " + objectLength);
        // crear los 7 párrafos
        let paragraphs = [];
        for (let i = 0; i < objectLength; i++) {
            let par = document.createElement("p");
            par.classList.add("p" + i)
            paragraphs[i] = par;
        }
        // append los párrafos a la section
        for (let i = 0; i < paragraphs.length; i++) {
            createdSection.append(paragraphs[i]); 
        }

        
        // recorremos el objeto person que previamente habíamos creado en la función getInfoCreateObject()
        for (const [key, value] of Object.entries(eachObject)) {
            console.log("ACÁÁÁ-A-");
            console.log(`${key}: ${value}`);
            console.log(value);
            // -------------- SEGUIR POR ACÁ --------------
            // Preguntar: ¿Cómo puedo recorrer los childNodes de .listRecords para que en cada iteración le agregue un value (ej.: iteración 1 → childNode[0] y el value del primer registro del objecto, y así sucesivamente)
            
            for (let i = 0; i < Object.entries(eachObject).length; i++) {
                console.log(value);
                document.querySelector(".listRecords").childNodes[i].textContent = `${value}`;
            }
        }
        
       });

}




