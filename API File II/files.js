let zona_datos, button, espacio;

function iniciar() {

    zona_datos = document.getElementById("zona_datos");
    button = document.getElementById("button");

    button.addEventListener("click", crear_espacio, false);
    navigator.webkitPersistentStorage.requestQuota(5*1024*1024, crear_acceso);
}

function crear_acceso() {

    // FUNCION OBSOLETA
    window.webkitRequestFileSytem(PERSISTENT, 5*1024*1024, crear_fs, error); 
}

function crear_fs(sistema) {

    espacio = sistema.root;
}

function crear_espacio() {

    let nombre_archivo = document.getElementById("archivo").value;

    if(nombre_archivo != "") {
        espacio.getFile(nombre_archivo, {create: true, exclusive: false}, mostrar, error);
    }
}

function mostrar(archivo){

    document.getElementById("archivo").value = "";
    zona_datos.innerHTML = "Éxito en la creación de espacio y archivo!<br>";
    zona_datos.innerHTML += "Nombre: " + archivo.name + "<br>";
    zona_datos.innerHTML += "Ruta: " + archivo.fullPath + "<br>";
}

function error(e) {

    alert("Ha habido un error: " + e.code);
}

window.addEventListener("load", iniciar, false);