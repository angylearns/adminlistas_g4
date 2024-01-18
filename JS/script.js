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
        
    // nos cercioramos de que todos los campos estén rellenos antes de seguir
    let chosenCategory = document.querySelector("#category").value;
    if (chosenCategory === "estudiante") {
        if (!eachName || !eachLastName1 || !eachLastName2 || !eachCategory || !eachCourse || !eachMail || !eachClass) {
        alert('Todos los campos son obligatorios');
        return; 
        } else {
            // agregamos todo eso al objeto
            let person = new Person(eachName, eachLastName1, eachLastName2, eachCategory, eachCourse, eachMail, eachClass);
            // agregamos person al array people (previamente inicializado sin contenido)
            people.push(person);
            // Mostramos el array por consola para comprobar que funciona
            console.log(people);
            // llamamos a la función appendSection() mandándole como parámetro el array people, que ya sí tiene datos dentro
            appendSection(people);
            showAlert();
            limpiarCampos();
        }
    } else if (chosenCategory === "docente" || chosenCategory === "pas" || chosenCategory === "") {
        if (!eachName || !eachLastName1 || !eachLastName2 || !eachCategory || !eachMail ) {
        alert('Todos los campos son obligatorios');
        return; 
        } else {
            // agregamos todo eso al objeto
            let person = new Person(eachName, eachLastName1, eachLastName2, eachCategory, eachCourse = "No aplica", eachMail, eachClass = "No aplica");
            // agregamos person al array people (previamente inicializado sin contenido)
            people.push(person);
            // Mostramos el array por consola para comprobar que funciona
            console.log(people);
            // llamamos a la función appendSection() mandándole como parámetro el array people, que ya sí tiene datos dentro
            appendSection(people);
            showAlert();
            limpiarCampos();
        }
    }
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


    // Obtener la lista
    let list = document.querySelector("#list");
    // Limpiar la lista antes de agregar nuevos elementos
    list.innerHTML = "";
    arrayPeople.forEach(function(eachObject) {
        // Crear la sección
        let createdSection = document.createElement("section");
        createdSection.classList.add("listRecords");
        // Iterar sobre las propiedades del objeto
        for (const [key, value] of Object.entries(eachObject)) {
            // Crear un párrafo para cada campo con su valor
            let par = document.createElement("p");
            par.textContent = `${value}`;
            // Crear botones de "Editar" y "Eliminar" para cada campo
            let editButton = document.createElement("button");
            editButton.innerHTML = "&#9998;"; // Icono de lápiz
            editButton.addEventListener("click", function() {
                // Llamar a la función de edición con el objeto y el campo correspondientes
                editField(eachObject, key);
            });
            let deleteButton = document.createElement("button");
            deleteButton.innerHTML = "&#128465;"; // Icono de papelera
            deleteButton.addEventListener("click", function() {
                // Llamar a la función de eliminación con el objeto y el campo correspondientes
                deleteField(eachObject, key);
            });
            // Agregar botones al párrafo
            par.append(editButton, deleteButton);
            // Agregar el párrafo a la sección
            createdSection.append(par);
        }
        // Agregar la sección a la lista
        list.append(createdSection);
    });
}
// Función para editar un campo específico de un objeto en la lista
function editField(person, field) {
    let newValue = prompt(`Editar:`, person[field]);
    if (newValue !== null) {
        person[field] = newValue;
        // Volver a mostrar la lista después de la edición
        appendSection(people);
    }
}
// Función para eliminar un campo específico de un objeto en la lista
function deleteField(person, field) {
    let confirmation = confirm(`¿Estás seguro de eliminar?`);
    if (confirmation) {
        // Eliminar el campo del objeto
        delete person[field];
        // Volver a mostrar la lista después de la eliminación
        appendSection(people);
    }
}