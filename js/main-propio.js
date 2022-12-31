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

  return "";
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "Debe elegir una ciudad";
  }
  return "";
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
  return "";
}

/*

Funciones validacion

*/

function ValidarFormulario(event) {
  const $formulario = document.querySelector("#carta-a-santa");
  const nombre = $formulario.nombre.value;
  const ciudad = $formulario.ciudad.value;
  const descripcionRegalo = $formulario["descripcion-regalo"].value;

  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    "descripcion-regalo": errorDescripcionRegalo,
  };

  console.log(manejarErrores(errores));

  event.preventDefault();
}

function manejarErrores(errores) {
  const llaves = Object.keys(errores);
  const $errores = document.getElementById("errores");
  let cantidadErroes = 0;


  while ($errores.firstChild) {
    $errores.removeChild($errores.firstChild);
  }

  llaves.forEach(function (llave) {
    const error = errores[llave];
    
    if (error) {
      cantidadErroes ++;
      $formulario[llave].className = "error";

      const $error = document.createElement("li");
      $error.innerText = error;
      $errores.appendChild($error);

    } else {
      $formulario[llave].className = "";
    }
    
  });

  return cantidadErroes;
}

const $formulario = document.querySelector(`#carta-a-santa`);
$formulario.onsubmit = ValidarFormulario;
