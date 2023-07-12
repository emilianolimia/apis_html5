let elem_origen, elem_destino;

function comenzar() {

    // elem_origen = document.querySelectorAll("#zona_imagenes img");
    
    // for (let i = 0; i < elem_origen.length; i++) {
    
    //     elem_origen[i].addEventListener("dragstart", comienza_arrastre, false);

    //     if (i!=1){
    //         elem_origen[i].addEventListener("dragend", terminar, false);
    //     }
    // }

    elem_destino = document.getElementById("zona_destino");
    elem_destino.addEventListener("dragenter", entrando, false);
    elem_destino.addEventListener("dragleave", saliendo, false);
    elem_destino.addEventListener("dragover", function(e){e.preventDefault();}, false);
    elem_destino.addEventListener("drop", soltar, false);
}

function comienza_arrastre(e) {

    let elemento = e.target;
    e.dataTransfer.setData("Text", elemento.getAttribute("id"));
}

function soltar(e) {

    e.preventDefault();
    // let id = e.dataTransfer.getData("Text");

    // if (id!="whatsapp.svg") {
    //     let src = document.getElementById(id).src;
    //     elem_destino.innerHTML = "<img src='" + src + "' class='imagen'>";        
    // } else {
    //     elem_destino.innerHTML = "Imagen no admitida";
    //     elem_destino.style.background = "#fa0d29";
    // }

    let archivos = e.dataTransfer.files;
    let listado = "";

    for(let i=0; i<archivos.length; i++){

        listado += "Archivo: " + archivos[i].name + " Peso: " + (archivos[i].size/1024).toFixed(2)
        + " Fecha: " + archivos[i].lastModifiedDate.toLocaleDateString() + "<br>";
    }

    elem_destino.innerHTML = listado;
}

function terminar(e) {

    let elemento = e.target;
    elemento.style.visibility = "hidden";
}

function entrando(e) {

    e.preventDefault();
    // let id = e.dataTransfer.getData("Text");

    // if (id!="whatsapp.svg") {
    //     elem_destino.style.background = "rgba(8, 252, 25, .8)";
    // } else {
    //     elem_destino.style.background = "#fa0d29";
    // }
}

function saliendo(e) {

    e.preventDefault();
    elem_destino.style.background = "#FFFFFF";
}

window.addEventListener("load", comenzar, false);