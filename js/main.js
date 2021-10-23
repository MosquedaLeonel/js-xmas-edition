
function validarNombre(nombre) {
    if (nombre.length === 0) {
        return "El campo nombre no debe estar vacio";
    }
    if (nombre.length >= 50) {
        return "Este campo debe tener menos de 50 caracteres";
    }

    if(!/^[a-z]+$/i.test(nombre)) {
        return "El campo nombre solo acepta letras"
    }
    return "";
}

function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
       return "Debes seleccionar una ciudad";
    }
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return "El campo descripcion no debe estar vacio";
    }
    if (descripcionRegalo.length >= 100) {
        return "Este campo debe tener menos de 100 caracteres";
    }
    if (!/^[a-z0-9,\._ +]/i.test(descripcionRegalo)) {
        return "El campo descripcion solo puede tener letras, numeros, espacios, puntos, comas y guiones bajo";
    }
    return '';
}

const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario;

function validarFormulario(event) {
    borrarErroresAnteriores();
    const $form = document.querySelector('[name=formulario]');

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo
    };
    

    const esExito = manejarErrores(errores) === 0;

    if (esExito) {
        $form.className = 'oculto';
        document.querySelector("#exito").className = '';
        window.setTimeout(redireccionar, 5000);    
    }

    event.preventDefault();
}

function manejarErrores(errores) {
    let contadorErrores = 0;
    const keys = Object.keys(errores);
    const $errores = document.querySelector("#errores");
    

    keys.forEach(function(key){
        const error = errores[key];

        if (error) {
            contadorErrores++;
            $form[key].className = "error";
            
            const $error = document.createElement("li");
            $error.innerText = error;
            $error.id = `error-${key}`;

            $errores.appendChild($error);
        } else {
            $form[key].className = "";
        }
    });

    return contadorErrores;
}   

function borrarErroresAnteriores () {
    const $errores = document.querySelectorAll("#errores li");

    if ($errores !== 0) {
        for (let error of $errores) {
            error.remove();
        }
    }
}

function redireccionar() {
    location.href = 'wishlist.html'
}