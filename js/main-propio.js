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

Validar que el nombre sea válido y escribir una prueba

*/

function validarNombre(nombre){
    if(nombre.lenght === 0){
        return "Este campo debe tener al menos un caracter"
    }
    if(nombre.lenght >= 50){
        return "Este campo debe tener menos de 50 caracteres"
    }
    return "No hay error"
}