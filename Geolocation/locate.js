function comenzar() {

    let button = document.getElementById("ubicar");
    button.addEventListener("click", obtener, false);
}

function obtener() {

    // Para dispositivos móviles
    let params = {enableHighAccuracy: true, timeout: 10000, maximumAge:60000};

    navigator.geolocation.getCurrentPosition(show_position, errors, params);
}

function show_position(position) {

    let location = document.getElementById("ubicacion");

    let mi_ubicacion = "";
    mi_ubicacion += "Latitud: " + position.coords.latitude + "<br>";
    mi_ubicacion += "Longitud: " + position.coords.longitude + "<br>";
    mi_ubicacion += "Exactitud: " + position.coords.accuracy;

    location.innerHTML = mi_ubicacion;

    // let mapa = "https://maps.googleapis.com/maps/api/staticmap?center= + position.coords.latitude + "," + position.coords.longitude + ",&zoom=12&size=400x400&sensor=false&,markers=" + position.coords.latitude + "," + position.coords.longitude;
    // location.innerHTML = "<img src='" + mapa + "'>";
}

function errors(error) {

    // alert("Ha habido un error " + error.code + " " + error.message);

    if (error.code == 1) {

        alert("Debes permitir el uso de la geolocalización en tu navegador");
    }
}

window.addEventListener("load", comenzar, false);