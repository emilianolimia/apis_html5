function comenzar() {

    let button = document.getElementById("almacenar");
    button.addEventListener("click", almacenar, false);
}

function almacenar() {

    let clave = document.getElementById("clave").value;
    let valor = document.getElementById("valor").value;

    // Usar localStorage para lamacenamiento permanente
    sessionStorage.setItem(clave, valor);
    mostrar();

    document.getElementById("clave").value = "";
    document.getElementById("valor").value = "";
}

function mostrar() {

    let zona_datos = document.getElementById("zona_datos");
    zona_datos.innerHTML = "<div><button onclick='vaciar()'>Vaciar</button></div>";
    
    for (let i = 0; i < sessionStorage.length; i++){
        
        let clave = sessionStorage.key(i);
        let valor = sessionStorage.getItem(clave);

        zona_datos.innerHTML += "<div>Clave: " + clave + "  |  " + "Valor: " + valor + "<br><button onclick=\"eliminar_item('" + clave + "')\">Eliminar</button></div>";
    }
}

function vaciar() {

    if(confirm("¿Estás seguro?")){

        sessionStorage.clear();
        mostrar();
    }
}

function eliminar_item(clave) {

    if(confirm("¿Estás seguro?")){

        sessionStorage.removeItem(clave);
        mostrar();
    }
}

window.addEventListener("load", comenzar, false);