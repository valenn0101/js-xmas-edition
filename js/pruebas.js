function probarValidarNombre() {
  console.assert(
    validarNombre("") === "Nombre debe tener al menos un caracter",
    "Validar nombre no funcionó con un string vacio"
  );

  console.assert(
    validarNombre(
      "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
    ) === "Nombre debe tener menos de 50 caracteres",
    "Validar nombre no validó que el nombre sea menor a 50 caracteres"
  );

  console.assert(
    validarNombre("123123") === "Nombre solo acepta letras",
    "Validar nombre no validó que el nombre contenga solo letras"
  );

  console.assert(
    validarNombre("Valentin") === "",
    "Validar nombre fallo con un nombre validó"
  );
}
probarValidarNombre();

function probarValidarCiudad() {
  console.assert(
    validarCiudad("") === "Debe elegir una ciudad",
    "Validar ciudad no validó que se haya seleccionado una ciudad"
  );

  console.assert(
    validarCiudad("Cordoba") === "",
    "Validar ciudad fallo con un nombre validó"
  );
}
probarValidarCiudad();

function probarValidarDescripcionRegalo() {
  console.assert(
    validarDescripcionRegalo("") === "Debe tener al menos un caracter",
    "Vaidar descripcion regalo no valido que el campo este vacio"
  );

  console.assert(
    validarDescripcionRegalo(
      "akjsdhfqwp9ehqwerhibddajsfhasdhufjasdfhdqweriqwhfdkjshfddd9qerihdfashdnfkjasdfbh9qwerdfbkjashfihasdfiausdhfashdfauisyhfasd"
    ) === "Debe usar menos de 100 caracteres",
    "Validar descripcion regalo no valido que haya menos de 100 caracteres"
  );

  console.assert(
    validarDescripcionRegalo("Quiero un kilo de helado") === "",
    "Validar descripcion regalo no funcionó con una descripcion correcta"
  );

  console.assert(
    validarDescripcionRegalo(".,.,.,.") ===
      "El campo solo puede tener numeros y letras",
    "Validar descripcion regalo no funcionó con los simbolos coma y punto"
  );
}

probarValidarDescripcionRegalo();
