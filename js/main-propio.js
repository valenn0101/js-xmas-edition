const $formulario = document.getElementById("carta-a-santa");

const nombre = $formulario.nombre.value;
const ciudad = $formulario.ciudad.value;
const comportamiento = $formulario.comportamiento.value;
const descripcionRegalo = $formulario["descripcion-regalo"].value;

console.log(nombre);
console.log(ciudad);
console.log(comportamiento);
console.log(descripcionRegalo);

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
function validarFormulario (event){
  const $formulario = document.getElementById("carta-a-santa");

  const nombre = $formulario.nombre.value;
  const ciudad = $formulario.ciudad.value;
  const descripcionRegalo = $formulario["descripcion-regalo"].value;

  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    descripcionRegalo: errorDescripcionRegalo,
  };

  console.log(errores);

  manejarErrores([errorNombre, errorCiudad, errorDescripcionRegalo]);

  event.preventDefault();
  }

  function manejarErrores(errores){
    errorNombre = errores[0]; //nombre
    errorCiudad = errores[1]; //ciudad
  //  errorDescripcionRegalo = errores[2]; //descripcionRegalo

    if (errorNombre){
      $formulario.nombre.className = "error"
    } else {
      $formulario.nombre.className = "";
    }
  }
  */