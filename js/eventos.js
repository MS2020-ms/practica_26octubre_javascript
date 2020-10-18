//alert('eventos');

let btnGuardar = document.getElementById('btnSave');
let selectPrioridad = document.querySelector('#intPriority');
let selectTarea = document.querySelector('#intTarea');
let btnBorrar = document.querySelector('.remove');
let selectBuscarPorPrioridad = document.querySelector('#searchPriority');
let buscador = document.querySelector('#buscador');

btnGuardar.addEventListener('click', recogerDatos);
btnBorrar.addEventListener('click', eliminarElemento);
buscador.addEventListener('input', recogerBusquedad);

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
    let idBorrar = event.target.idTarea;
    console.log(idBorrar); //undefined?????
    let posicion = listaTareas.findIndex(tarea => tarea.idTarea == idBorrar);
    console.log(posicion); // -1 ?????
    listaTareas.splice(posicion, 1);
    console.log(listaTareas);

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