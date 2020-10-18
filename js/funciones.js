//alert('funciones');

let numeroTareas = document.getElementById('numerotareas');
let seccionTareas = document.querySelector('#tasks');
let articleTarea = document.querySelector('.task');
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
        printTareas(listaTareas, seccionTareas);
        id++;
    } else {
        alert('Tarea duplicada!')
    }

}

function printTareas(pListaTareas, pSection) {
    numeroTareas.innerText = pListaTareas.length + ` Tareas`;

    if (pListaTareas.length != 0) {
        pSection.innerHTML = "";
        pListaTareas.forEach(tarea => {
            printTarea(tarea);
        })
    } else {
        //alert("Recuerde rellenar todos los campos!");
    }
}

function printTarea(pTarea) {
    let color = "";

    if (pTarea.prioridad == 'urgente') {
        color = 'lightpink';
    } else if (pTarea.prioridad == 'mensual') {
        color = 'lightgreen';
    } else {
        color = 'lightblue';
    }

    seccionTareas.innerHTML += `<article>
    <h3 class="task" style= "background-color:`+ color + `">${pTarea.titulo}</h3>
    <h3 class="remove" >Eliminar</h3>
    </article>`
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

printTareas(listaTareas, seccionTareas);

console.log(listaTareas);

