let zona_datos, button;

function iniciar() {

    zona_datos = document.getElementById("zona_datos");
    button = document.getElementById("button");

    button.addEventListener("click", read_file, false);
}

function read_file() {

    let url = "text.txt";
    let solicitud = new XMLHttpRequest();

    solicitud.addEventListener("load", mostrar, false);
    solicitud.open("GET", url, true);
    solicitud.send(null);
}

function mostrar(archivo){

    zona_datos.innerHTML = archivo.target.responseText;
}

window.addEventListener("load", iniciar, false);