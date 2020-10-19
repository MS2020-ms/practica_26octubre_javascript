//alert('eventos');

let btnGuardar = document.getElementById('btnSave');
let selectPrioridad = document.querySelector('#intPriority');
let selectTarea = document.querySelector('#intTarea');
let btnBorrar = document.querySelector('.remove');
let selectBuscarPorPrioridad = document.querySelector('#searchPriority');
let buscador = document.querySelector('#buscador');

btnGuardar.addEventListener('click', recogerDatos);
buscador.addEventListener('input', recogerBusquedad);


function printTareas(pListaTareas, pSection) {
    if (pListaTareas.length != 0) {
        pSection.innerHTML = "";
        pListaTareas.forEach(tarea => {
            printTarea(tarea, pSection);
        })
    } else {
        //alert("Recuerde rellenar todos los campos!");
    }
}

function printTarea(pTarea, pSection) {
    numeroTareas.innerText = listaTareas.length + ` Tareas`;

    let article = document.createElement('article');
    let h3 = document.createElement('h3');
    h3.className = pTarea.prioridad;
    //h3.classList.add('task');

    let contenidoh3 = document.createTextNode(`${pTarea.titulo}`);
    h3.appendChild(contenidoh3);

    //boton eliminar:
    let input = document.createElement('input');
    input.addEventListener('click', eliminarElemento);
    input.classList.add('remove');
    input.type = "reset";
    input.value = "Eliminar";
    input.dataset.id = pTarea.idTarea;

    article.appendChild(h3);
    article.appendChild(input);
    pSection.appendChild(article);

    /*if (pTarea.prioridad == 'urgente') {
        h3.style.backgroundColor = 'lightpink';
    } else if (pTarea.prioridad == 'mensual') {
        h3.style.backgroundColor = 'lightgreen';
    } else {
        h3.style.backgroundColor = 'lightblue';
    }*/
}

function recogerDatos(event) {
    event.preventDefault();

    let inputTarea = selectTarea.value.trim();
    let inputPrioridad = selectPrioridad.value.trim();

    if (inputTarea != "" && inputPrioridad != "") {
        addTarea(inputTarea, inputPrioridad);

    } else {
        alert('Debes rellenar todos los campos!');
    }

    selectTarea.value = "";
    selectPrioridad.value = "";
}

function eliminarElemento(event) {
    //alert('Eliminando...');
    //console.log(event.target.parentNode);

    let articleToRemove = event.target.parentNode;
    articleToRemove.parentNode.removeChild(articleToRemove);

    let idBorrar = event.target.dataset.id;
    console.log(idBorrar);

    let posicion = listaTareas.findIndex(tarea => tarea.idTarea == idBorrar);
    console.log(posicion);

    if (posicion !== -1) {
        listaTareas.splice(posicion, 1);
    }
    console.log(listaTareas);
    numeroTareas.innerText = listaTareas.length + ` Tareas`;
}

//filtrar por prioridad:
//event.target.value me devuelve el valor del select 
selectBuscarPorPrioridad.addEventListener('click', event => {
    printTareas(filterTareasPorPrioridad(listaTareas, event.target.value), seccionTareas);
    if (event.target.value == 0) {
        printTareas(listaTareas, seccionTareas);
    }
})

//filtrar por busqueda:
function recogerBusquedad(event) {
    //console.log(event.target.value);
    let palabraBuscar = event.target.value.trim();
    let listaFiltrada = filterTareasPorPalabra(listaTareas, palabraBuscar);
    printTareas(listaFiltrada, seccionTareas);
}

printTareas(listaTareas, seccionTareas);
console.log(listaTareas);