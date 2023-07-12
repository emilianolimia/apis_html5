let bd, zona_datos;

function iniciar() {

    zona_datos = document.getElementById("zona_datos");
    let boton = document.getElementById("almacenar");

    boton.addEventListener("click", agregar_objeto, false);

    let solicitud = indexedDB.open("mi_base");
    solicitud.onsuccess = function(e) {
        bd = e.target.result;
    }

    solicitud.onupgradeneeded = function(e) {
        bd = e.target.result;
        bd.createObjectStore("gente", {keyPath: "clave"});
    }
}

function agregar_objeto() {

    let clave = document.getElementById("clave").value;
    let texto = document.getElementById("texto").value;
    let fecha = document.getElementById("fecha").value;

    let transaccion = bd.transaction(["gente"], "readwrite");
    let almacenamiento = transaccion.objectStore("gente");
    let agregar = almacenamiento.add({clave: clave, texto: texto, fecha: fecha});
    agregar.addEventListener("success", mostrar, false);

    document.getElementById("clave").value = "";
    document.getElementById("texto").value = "";
    document.getElementById("fecha").value = "";
}

function mostrar(){

    zona_datos.innerHTML = "";
    let transaccion = bd.transaction(["gente"], "readonly");
    let almacenamiento = transaccion.objectStore("gente");
    let cursor = almacenamiento.openCursor();
    cursor.addEventListener("success", mostrar_datos, false);
}

function mostrar_datos(e) {

    let cursor = e.target.result;

    if(cursor) {

        zona_datos.innerHTML += "<div>" + cursor.value.clave + " - " + cursor.value.texto +
        " - " + cursor.value.fecha + "</div>";

        cursor.continue();
    }
}

window.addEventListener("load", iniciar, false);