function probarValidarNombre() {
    console.assert(
        validarNombre('') === "El campo nombre no debe estar vacio",
        'Validar nombre no validó que el nombre no sea vacío'
    );

    console.assert(
        validarNombre(
        '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === "Este campo debe tener menos de 50 caracteres",
        'Validar nombre no validó que el nombre sea menor a 50 caracteres'
    );
    
    console.assert(
        validarNombre("123123123") === "El campo nombre solo acepta letras",
        "Validar nombre no valido que el nombre solo tenga letras"
    );

    console.assert(
        validarNombre("Leonel") === '',
        'Validar nombre fallo con un nombre valido'
  );
}

function probarValidarCiudad () {

    console.assert(
        validarCiudad("") === "Debes seleccionar una ciudad",
        'Validar ciudad no mostro un error cuando la ciudad es vacio'
    );
}

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo("") === "El campo descripcion no debe estar vacio",
        "Validar descripcion regalo no valido que el campo no este vacio",
    );

    console.assert(
        validarDescripcionRegalo("1234567891234567891234567891234567891234567891234567891234567891234567891234567788912345654894151698") === "Este campo debe tener menos de 100 caracteres",
        "Validar descripcion regalo no valido que el campo sea muy largo"
    );

    console.assert(
        validarDescripcionRegalo("#@!") === "El campo descripcion solo puede tener letras, numeros, espacios, puntos, comas y guiones bajo",
        "Validar descripcion regalo no valido que el campo tenga solo numeros y letras"
    );

    console.assert(
        validarDescripcionRegalo('La octava') === "",
        'Validar descripcion regalo no valido con una descripcion valida'
    );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();


