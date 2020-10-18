//alert('eventos');

let btnGuardar = document.getElementById('btnSave');
let selectPrioridad = document.querySelector('#intPriority');
let selectTarea = document.querySelector('#intTarea');
let btnBorrar = document.querySelector('.remove');
let selectBuscarPorPrioridad = document.querySelector('#searchPriority');

btnGuardar.addEventListener('click', recogerDatos);
btnBorrar.addEventListener('click', eliminarElemento);

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
    let idBorrar = event.target.idTarea; //undefined?????
    console.log(idBorrar);
    let posicion = listaTareas.findIndex(tarea => tarea.idTarea == idBorrar);
    console.log(posicion);
    listaTareas.splice(posicion, 1);
    console.log(listaTareas);

}


//event.target.value me devuelve el valor del select 
selectBuscarPorPrioridad.addEventListener('click', event => {
    printTareas(filterTareasPorPrioridad(listaTareas, event.target.value), seccionTareas);
})