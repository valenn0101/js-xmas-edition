/*

Validaciones

*/

function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "Nombre debe tener al menos un caracter";
  }
  if (nombre.length >= 50) {
    return "Nombre debe tener menos de 50 caracteres";
  }

  if (!/^[a-z]+$/i.test(nombre)) {
    return "Nombre solo acepta letras";
  }

  return "No hay error";
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "Debe elegir una ciudad";
  }
  return "No hay error";
}

function validarDescripcionRegalo(descripcionRegalo) {
  if (descripcionRegalo.length >= 100) {
    return "Debe usar menos de 100 caracteres";
  }
  if (descripcionRegalo.length === 0) {
    return "Debe tener al menos un caracter";
  }
  if (!/[a-z0-9 ]+$/i.test(descripcionRegalo)) {
    return "El campo solo puede tener numeros y letras";
  }
  return "No hay error";
}
/*

Funciones validacion

*/

function ValidarFormulario(event) {
  const $formulario = document.querySelector("#carta-a-santa");

  const nombre = $formulario.nombre.value;
  const ciudad = $formulario.ciudad.value;
  const descripcionRegalo = $formulario.descripcionRegalo.value;

  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    descripcionRegalo: errorDescripcionRegalo,
  };

  manejarErrores(errores);

  event.preventDefault();
}

function manejarErrores(errores) {
  errorNombre = errores.nombre;
  errorCiudad = errores.ciudad;
  errorDescripcionRegalo = errores.descripcionRegalo;

  if (errorNombre) {
    $formulario.nombre.className = "error";
  } else {
    $formulario.nombre.className = "";
  }
  if (errorCiudad) {
    $formulario.ciudad.className = "error";
  } else {
    $formulario.ciudad.className = "";
  }
  if(errorDescripcionRegalo){
    $formulario.descripcionRegalo.className = "error";
  } else {
    $formulario.descripcionRegalo.className = "";
  }
}

const $formulario = document.querySelector(`#carta-a-santa`);
$formulario.onsubmit = ValidarFormulario;
