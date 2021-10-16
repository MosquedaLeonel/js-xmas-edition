function probarValidarNombre() {
  console.assert(
      validarNombre('') === "Este campo debe tener al menos 1 caracter",
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
          "Este campo debe tener menos de 50 caracteres",
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
}

function probarValidarCiudad () {
    console.assert(
        validarCiudad("") === "Debes seleccionar una ciudad",
        'Validar ciudad no valido que la ciudad sea vacio',
    );
}

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo("") === "Este campo no debe estar vacio",
        "Validar descripcion regalo no valido que la descripcion sea vacio",
    );

    console.assert(
        validarDescripcionRegalo("123456789") === "Este campo debe tener al menos 10 caracteres",
        "Validar descripcion regalo no valido que la descripcion sea menor a 10 caracteres",
    );

    console.assert(
        validarDescripcionRegalo(test100) === "Este campo debe tener menos de 100 caracteres",
        "Validar descripcion regalo no valido que la descripcion sea mayor a 100 caracteres",
    );
}
let test100 = "1234567891234567891234567891234567891234567891234567891234567891234567891234567788912345654894151698"

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();


