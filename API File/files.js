let zona_datos;

function iniciar() {

    zona_datos = document.getElementById("zona_datos");

    let archivos = document.getElementById("archivos");
    archivos.addEventListener("change", procesar_archivos, false);
}

function procesar_archivos(e) {

    let archivos = e.target.files;
    let mi_archivo = archivos[0];

    if(!mi_archivo.type.match(/image/)) {

        alert("Selecciona una imagen, por favor.");
    } 
    else {

        zona_datos.innerHTML = "";
        zona_datos.innerHTML += "Nombre del archivo: " + mi_archivo.name + "<br>";
        zona_datos.innerHTML += "Tamaño del archivo: " + Math.round(mi_archivo.size/1024) + " kb <br>";

        let lector = new FileReader();
        lector.readAsDataURL(mi_archivo);
        lector.addEventListener("load", mostrar, false);
    }
}

function mostrar(e){

    let resultado = e.target.result;
    let imagen = document.createElement("img");
    imagen.src = resultado;
    imagen.style.width = "85%";
    zona_datos.appendChild(imagen);
}

window.addEventListener("load", iniciar, false);