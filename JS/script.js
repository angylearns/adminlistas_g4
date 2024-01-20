/* 
Explicación addEventListener:
    Esto en HTML ↓ ....
        <button onclick="miFuncioncita()" class="botonCreado">Enviar</button>
    ... es igual a esto en JavaScript ↓
        document.querySelector(".botonCreado").addEventListener("click", miFuncioncita)

    Es como agregarle a un elemento un espía que está pendiente de cada cosa que pase y, cuando pasa lo que queremos que pase para que se active nuestra función (en este caso, es un click), pues nuestra función (en este caso, miFuncioncita()) se activa.
    
    P.D.: tanto .botonCreado como miFuncioncita() no existen en este archivo; las invité para este ejemplo.
*/


/* 
EXPLICACIÓN DE LAS NOTAS QUE VOY A PONER:
    Los puntos suspensivos (...) significan que la explicación sigue...
    ...y el número que pondré entre paréntesis delante o detrás de esos puntos suspensivos significan frases conectadas. Ejemplo: ... (1) - (1) ... significa que esas frases están conectadas y que la segunda es la continuación de la primera.
*/


// Comenzamos con la explicación de este archivo:

// Con el DOM, conseguimos los elementos con estos ids, que son los inputs de curso y de clase, y los metemos en sendas variables... (1)
let iCourse = document.querySelector("#course");
let iClass = document.querySelector("#class");

// (1) ...y, si están AMBOS deshabilitados, les cambiamos el color de fondo.
if (iCourse.disabled && iClass.disabled) {
    iCourse.style.backgroundColor = "#A5A5A5";
    iClass.style.backgroundColor = "#A5A5A5";
}

// Con el DOM, conseguimos el elemento de id "category" y le agregamos un eventListener que, cuando cambie, llame a una función anónima (porque, como observamos, no tiene nombre; simplemente dice function); ... (2)
document.querySelector("#category").addEventListener("change", function () {
    // (2) ...conseguimos con el DOM el valor/value del elemento de id "category" y lo metermos en la variable chosenCategory.
    let chosenCategory = document.querySelector("#category").value;
    // (2) ...si el valor/value guardado en choseCategory es COMPLETAMENTE IGUAL TANTO EN CONTENIDO COMO EN TIPO DE DATO (tres iguales "===") a "estudiante"...
    if (chosenCategory === "estudiante") {
        // (2) ...cambia el disabled de los inputs de curso y de clase a false (o sea, los activa) y les cambie el colorcito de fondo.
        iCourse.disabled = false;
        iClass.disabled = false;
        iCourse.style.backgroundColor = "#FFEBCC";
        iClass.style.backgroundColor = "#FFEBCC";

    // (2) ...si else, o sea, si no se cumple la condición del if (que choseCategory sea exactamente igual a "estudiante")... (2.1)
    } else {
        // (2.1) ...mantiene el disable de los inputs de curso y de clase en true (o sea, los mantiene deshabilitados) y el color de fondo es el mismo gricesito del comienzo (líneas 29 y 30). 
        iCourse.disabled = true;
        iClass.disabled = true;
        iCourse.style.backgroundColor = "#A5A5A5";
        iClass.style.backgroundColor = "#A5A5A5";
    }
});

// Acá creamos un constructor de objetos. En este caso, el objeto se va a llamar Person, y va a tener 7 parámetros a los que tenemos que asignarles sus respectivo argumentos cuando creemos cada objeto Person usando este constructor... (3)
function Person(nom, ap1, ap2, cat, cur, mail, clase) {
    // ... (3) en ORDEN, cada uno de los parámetros que van entre paréntesis se lo asignamos a una propiedad (name, last1, last2, category, etc...). El this se refiere al objeto que está siendo construido. Como este es un CONSTRUCTOR, es como la plantilla de creación de un objeto y todavía no tiene nombre, por tanto usamos la palabra reservada "this" para referirnos a que, en un futuro, ese espacio de "this" lo ocupará el nombre del objeto que creemos gracias a este constructor.
    this.name = nom;
    this.last1 = ap1;
    this.last2 = ap2;
    this.category = cat;
    this.course = cur;
    this.email = mail;
    this.clas = clase;
}

// Creamos la función cleanFields()... (4) //
function cleanFields() {
    // (4) ...que lo que hace es coger el valor de cada elemento de estos ids (name, lastName1, lastName2, etc..) y vaciarlo. Estos elementos son los valores/value de los inputs.
    document.querySelector("#name").value = "";
    document.querySelector("#lastName1").value = "";
    document.querySelector("#lastName2").value = "";
    document.querySelector("#category").value = "";
    document.querySelector("#course").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#class").value = "";
}

// Creamos la función showAlert()... (5)
function showAlert() {
    // (5) ...que lanza un mensaje de alerta.
    alert("Datos enviados correctamente");
}

// Creamos la función addAlertInfo()... (5)
function addAlertInfo() {
    /// (5) ...que lanza un mensaje de alerta.
    alert("Lista cargada correctamente");
}


// Creamos la función savedList()... (6)
function savedList() {
    // (6) ...que te pide por prompt (una ventanita que se abre; igual que el alert pero te permite escribir)... (6.1)
    let listName = prompt("Introduzca nombre de lista");
    // (6.1) ...y te devuelve un mensaje de alerta con el mensaje entre acentos al revés. 
    alert(`Lista "${listName}" guardada correctamente`);
    // Esto de ir así entre acentos al revés y no entre comillas se llama template literals/plantillas literales/plantillas de cadenas. Búsquenlo, es una maravilla.
}

// Incializamos un array de nombre "people" vacío.
let people = [];

// Creamos la función getInfoCreateObjet() que lo que va a hacer, como si nombre indica, es conseguir información y crear un objeto... (7)
function getInfoCreateObject() {
    // (7) ...conseguimos con el DOM el valor/value del elemento de id "category" y lo metermos en la variable chosenCategory.
    let chosenCategory = document.querySelector("#category").value;

    // (7) ... coge el valor/value de cada elemento con esos ids y lo mete en una variable, ... (7.1)
    let eachName = document.querySelector("#name").value;
    let eachLastName1 = document.querySelector("#lastName1").value;
    let eachLastName2 = document.querySelector("#lastName2").value;
    let eachCategory = document.querySelector("#category").value;
    let eachCourse = document.querySelector("#course").value;
    let eachMail = document.querySelector("#email").value;
    let eachClass = document.querySelector("#class").value;

    // (7.1) ...si chosenCategory es COMPLETAMENTE IGUAL TANTO EN CONTENIDO COMO EN TIPO DE DATO (tres iguales "===") a "estudiante"... (7.2)
    if (chosenCategory === "estudiante") {

        // (7.2) ...Esta línea de if lo que dice literalmente es: si eachName NO es (por tanto, está vacía) o si eachLastName1 NO es o si eachLastName2 NO es, etc...etc..., asi que si NINGUNA de estas variables está vacía... (7.2.1)
        if (!eachName || !eachLastName1 || !eachLastName2 || !eachCategory || !eachCourse || !eachMail || !eachClass) {
            // (7.2.1) ...muestra un mensaje de alerta. 
            alert('ERROR: Todos los campos son obligatorios');
            return;
            // Nota: Esto de Sí ser o NO ser es porque cuando una variable está vacía es false y cuando tiene contenido es true. Por tanto, en este caso, estamos comprobando que ninguna de las variables sea false, o sea, que ninguna esté vacía. El signo de exclamación hacia abajo es el operador lógico NOT. Ponerlo delante de algo niega ese algo. En estos casos, si niega una variable, el resultado sería false. ¿Qué es, entonces, que una variable sea false? Que está vacía. Por eso, en este if estamos comprobando que ninguna de la variables esté vacía con las barritas "||", que son el operador lógico OR. 

        // (7.2) ...si else, o sea, si NO se cumple la condición de la línea 122, por tanto, si cada una de esas variables SÍ es (o sea, SÍ tienen contenido...) ... (7.2.2)
        } else {
            // (7.2.2) ...se crea un objeto Person al que llamamos "person" y le mandamos como argumentos las variables previamente creadas que equivalen a los valores/value de los inputs.
            let person = new Person(eachName, eachLastName1, eachLastName2, eachCategory, eachCourse, eachMail, eachClass);
            //  (7.2.2) ...agregamos el objeto person al array people (el que en la línea 102 inicializamos vacío).
            people.push(person);
            // (7.2.2) ...y llamamos a las siguientes funciones. Además, a la función appendSection(), que requiere de un parémtros para funcionar, le mandamos el array people como argumento.
            appendSection(people);
            showAlert();
            cleanFields();
            /* 
            NOTA: Recordemos que la DIFERENCIA entre PARÁMETRO y ARGUMENTO es:
                • Parámetro: variable que se define en la declaración de la función y que se utiliza para recibir datos de entrada cuando se llama a la función. Los parámetros son parte de la definición de la función y se especifican en la lista de parámetros de la función. Por ejemplo, en la función suma(a, b), a y b son parámetros.
                • Argumento: valor específico que se pasa a la función cuando se llama. Los argumentos son los datos reales que se utilizan para ejecutar la función. Cuando se llama a la función suma(a, b), los valores que se pasan a la función son los argumentos. Por ejemplo, si llamamos a la función suma(5, 3), entonces 5 y 3 son los argumentos.
            */
        }
    // (7.1) ...o si chosenCategory es COMPLETAMENTE IGUAL TANTO EN CONTENIDO COMO EN TIPO DE DATO (tres iguales "===") a "docente" o COMPLETAMENTE IGUAL TANTO EN CONTENIDO COMO EN TIPO DE DATO (tres iguales "===") a "pas" o COMPLETAMENTE IGUAL TANTO EN CONTENIDO COMO EN TIPO DE DATO (tres iguales "===") a vacío ("")... (7.3)
    } else if (chosenCategory === "docente" || chosenCategory === "pas" || chosenCategory === "") {
        // (7.3) ...y, además, si las variables siguientes variables NO son. (Nota: En este caso hay menos variables que comprobar porque Docente y PAS tienen menos campos)... (7.3.1)
        if (!eachName || !eachLastName1 || !eachLastName2 || !eachCategory || !eachMail) {
            // (7.3.1) ...se lanza un mensaje de error.
            alert('ERROR: Todos los campos son obligatorios');
            // (7.3.1) ...se sale de la condición. ¿Qué pasa si se sale de la condición? Que se evalúa de nuevo y si las variables siguen NO siendo, pues volverá a entrar en esta condición y se volverá a lanzar el mensaje de error.
            return;

        // (7.3) ...si else, en este caso, si no se cumple la condición de la línea 145 (por tanto, las variables SÍ son)... (7.3.2)
        } else {
            // (7.3.2) ...se crea un objeto Person al que llamamos "person" y le mandamos como argumentos las variables previamente creadas que equivalen a los valores/value de los inputs.
            let person = new Person(eachName, eachLastName1, eachLastName2, eachCategory, eachCourse = "No aplica", eachMail, eachClass = "No aplica");
            // (7.3.2) ...agregamos el objeto person al array people (el que en la línea 102 inicializamos vacío).
            people.push(person);
            // (7.3.2) ...y llamamos a las siguientes funciones. Además, a la función appendSection(), que requiere de un parémtros para funcionar, le mandamos el array people como argumento.
            appendSection(people);
            showAlert();
            cleanFields();
        }
    }
}

// Creamos la función appendSection(), que requiere un parámetro que llamaremos "arrayPeople" para manejarlo dentro de la función. En este caso, se llama asi porque le vamos a mandar el array people como argumento y lo quisimos llamar así para darle más claridad al código. No siempre se tiene que llamar de esta manera, pues en otros códigos que hagamos no solamente se mandaría como argumento el array de nombre people. (8) [CONTINUARÁ]
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

            par.append(editButton);
            createdSection.append(par);
        }

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "&#128465;";

        deleteButton.addEventListener("click", function () {
            deleteField(eachObject);
        });

        createdSection.appendChild(deleteButton);
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


function deleteField(objeto) {

    console.dir(objeto);
    let nameObject = objeto["name"];
    let surname1 = objeto["last1"];
    let surname2 = objeto["last2"];
    let email = objeto["email"];

    let foundIndex;

    people.forEach(function (person, index) {
        if (person.name === nameObject && person.last1 === surname1 && person.last2 === surname2 && person.email === email) {
            foundIndex = index;
        }
    });

    let confirmation = confirm(`¿Estás seguro/a de eliminar?`);

    if (confirmation) {
        people.splice(foundIndex, 1);
        appendSection(people);
    }    
}