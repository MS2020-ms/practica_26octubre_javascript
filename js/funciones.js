//alert('funciones');

let numeroTareas = document.getElementById('numerotareas');
let seccionTareas = document.querySelector('#tasks');
let id = 3;

function addTarea(pTarea, pPrioridad) {
    const newTarea = {
        idTarea: id,
        titulo: pTarea,
        prioridad: pPrioridad
    }

    let existe = listaTareas.findIndex(tarea => {
        return tarea.titulo == pTarea && tarea.prioridad == pPrioridad;
    })

    if (existe == -1) {
        listaTareas.push(newTarea);
        printTarea(newTarea, seccionTareas);
        id++;
    } else {
        alert('Tarea duplicada!')
    }
}

function filterTareasPorPrioridad(pListaTareas, pPrioridad) {
    const result = pListaTareas.filter(tarea => tarea.prioridad.toLowerCase() == pPrioridad.toLowerCase());
    return result;
}

function filterTareasPorPalabra(pListaTareas, pPalabraBuscar) {
    const filterList = pListaTareas.filter(tarea => {
        let titulo = tarea.titulo;
        return titulo.toLowerCase().includes(pPalabraBuscar.toLowerCase());
    })
    return filterList
}


