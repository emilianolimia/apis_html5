let zona_datos, button, zona_progreso;

function iniciar() {

    zona_datos = document.getElementById("zona_datos");
    button = document.getElementById("button");
    zona_progreso = document.getElementById("zona_progreso");

    button.addEventListener("click", read_file, false);
}

function read_file() {

    let url = "Noche_Atacama.jpeg";
    let solicitud = new XMLHttpRequest();

    solicitud.addEventListener("loadstart", carga_barra, false);
    solicitud.addEventListener("progress", estado_barra, false);
    solicitud.addEventListener("load", mostrar, false);

    solicitud.open("GET", url, true);
    solicitud.send(null);
}

function carga_barra() {

    zona_datos.innerHTML = "<progress value='0' max='100'></progress>";
}

function estado_barra(e) {

    let porcentaje = parseInt(e.loaded/e.total*100);
    let barra_progreso = zona_datos.querySelector("progress");

    barra_progreso.value = porcentaje;
    zona_progreso.innerHTML = porcentaje + " %";
}

function mostrar(archivo){

    zona_datos.innerHTML = "Archivo leído exitosamente";
}

window.addEventListener("load", iniciar, false);