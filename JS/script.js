let iCourse = document.querySelector("#course");
let iClass = document.querySelector("#class");

if (iCourse.disabled && iClass.disabled) {
    iCourse.style.backgroundColor = "#A5A5A5";
    iClass.style.backgroundColor = "#A5A5A5";
}


document.querySelector("#category").addEventListener("change", function () {

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


function Person(nom, ap1, ap2, cat, cur, mail, clase) {

    this.name = nom;
    this.last1 = ap1;
    this.last2 = ap2;
    this.category = cat;
    this.course = cur;
    this.email = mail;
    this.clas = clase;
}


function cleanFields() {

    document.querySelector("#name").value = "";
    document.querySelector("#lastName1").value = "";
    document.querySelector("#lastName2").value = "";
    document.querySelector("#category").value = "";
    document.querySelector("#course").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#class").value = "";
}


function showAlert() {
    alert("Datos enviados correctamente");
}


function addAlertInfo() {
    alert("Lista cargada correctamente");
}


function savedList() {
    alert("Lista guardada correctamente");
}


let people = [];

function getInfoCreateObject() {

    let eachName = document.querySelector("#name").value;
    let eachLastName1 = document.querySelector("#lastName1").value;
    let eachLastName2 = document.querySelector("#lastName2").value;
    let eachCategory = document.querySelector("#category").value;
    let eachCourse = document.querySelector("#course").value;
    let eachMail = document.querySelector("#email").value;
    let eachClass = document.querySelector("#class").value;

    let chosenCategory = document.querySelector("#category").value;

    if (chosenCategory === "estudiante") {

        if (!eachName || !eachLastName1 || !eachLastName2 || !eachCategory || !eachCourse || !eachMail || !eachClass) {
            
            alert('Todos los campos son obligatorios');
            return;

        } else {

            let person = new Person(eachName, eachLastName1, eachLastName2, eachCategory, eachCourse, eachMail, eachClass);
            people.push(person);

            appendSection(people);
            showAlert();
            cleanFields();

        }
    } else if (chosenCategory === "docente" || chosenCategory === "pas" || chosenCategory === "") {

        if (!eachName || !eachLastName1 || !eachLastName2 || !eachCategory || !eachMail) {

            alert('Todos los campos son obligatorios');
            return;

        } else {

            let person = new Person(eachName, eachLastName1, eachLastName2, eachCategory, eachCourse = "No aplica", eachMail, eachClass = "No aplica");
            people.push(person);

            appendSection(people);
            showAlert();
            cleanFields();
        }
    }
}


function appendSection(arrayPeople) {

    arrayPeople.forEach(function (eachObject) {

        let createdSection = document.createElement("section");
        let list = document.querySelector("#list");
        list.append(createdSection);
        createdSection.classList.add("listRecords");

        for (const [key, value] of Object.entries(eachObject)) {
            
            let par = document.createElement("p");
            par.textContent = value;
            createdSection.append(par);
        }
    });

    let list = document.querySelector("#list");

    list.innerHTML = "";

    arrayPeople.forEach(function (eachObject) {

        let createdSection = document.createElement("section");
        createdSection.classList.add("listRecords");

        for (const [key, value] of Object.entries(eachObject)) {

            let par = document.createElement("p");
            par.textContent = `${value}`;

            let editButton = document.createElement("button");
            editButton.innerHTML = "&#9998;";

            editButton.addEventListener("click", function () {
                editField(eachObject, key);
            });

            let deleteButton = document.createElement("button");
            deleteButton.innerHTML = "&#128465;";

            deleteButton.addEventListener("click", function () {
                deleteField(eachObject, key);
            });

            par.append(editButton, deleteButton);
            createdSection.append(par);
        }

        list.append(createdSection);
    });
}


function editField(person, field) {

    let newValue = prompt(`Editar:`, person[field]);

    if (newValue !== null) {
        person[field] = newValue;

        appendSection(people);
    }
}


function deleteField(person, field) {

    let confirmation = confirm(`¿Estás seguro/a de eliminar?`);

    if (confirmation) {
        delete person[field];

        appendSection(people);
    }
}