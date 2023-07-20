let zona_datos, button;

function iniciar() {

    zona_datos = document.getElementById("zona_datos");
    button = document.getElementById("button");

    button.addEventListener("click", send_data, false);
}

function send_data() {

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;

    let data = new FormData();
    data.append("nombre", nombre);
    data.append("apellido", apellido);

    let url = "http://macbook-air-de-emiliano.local/procesar.php";
    let solicitud = new XMLHttpRequest();

    solicitud.addEventListener("load", mostrar, false);
    solicitud.open("POST", url, true);
    solicitud.send(data);
}

function mostrar(e){

    zona_datos.innerHTML = e.target.responseText;
}

window.addEventListener("load", iniciar, false);