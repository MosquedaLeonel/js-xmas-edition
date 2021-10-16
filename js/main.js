const $form = document.querySelector('[name=formulario]');

const nombre = $form.nombre.value;
const ciudad = $form.ciudad.value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form['descripcion-regalo'].value;

function validarNombre(nombre) {
    if (nombre.length === 0) {
        return "Este campo debe tener al menos 1 caracter";
    }
    if (nombre.length >= 50) {
        return "Este campo debe tener menos de 50 caracteres";
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
        return "Este campo no debe estar vacio";
    }
    if (descripcionRegalo.length <= 10 && descripcionRegalo.length > 0) {
        return "Este campo debe tener al menos 10 caracteres";
    }
    if (descripcionRegalo.length >= 100) {
        return "Este campo debe tener menos de 100 caracteres";
    }
    return '';
}



