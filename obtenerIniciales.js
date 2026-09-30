// Funcion que obtiene las iniciales de un nombre completo
function obtenerIniciales(nombreCompleto) {
  // validar que sea un string y que no este vacio
  if (typeof nombreCompleto !== "string" || nombreCompleto.trim() === "") {
    return "Entrada inválida";
  }

  // quitar espacios de mas y separar las palabras
  var palabras = nombreCompleto.trim().split(" ");

  // filtrar palabras vacias por si hay espacios de mas
  var palabrasFiltradas = palabras.filter(function(palabra) {
    return palabra !== "";
  });

  // sacar la primera letra de cada palabra y pasarla a mayuscula
  var iniciales = palabrasFiltradas.map(function(palabra) {
    return palabra[0].toUpperCase();
  });

  // juntar todas las letras en un solo string
  var resultado = iniciales.join("");

  return resultado;
}

// pruebas exitosas
console.log(obtenerIniciales("ana maria lópez"));         // AML
console.log(obtenerIniciales("juan carlos pérez gómez")); // JCPG
console.log(obtenerIniciales("luisa"));                   // L

// prueba con multiples espacios
console.log(obtenerIniciales("  pedro   pablo   "));      // PP

// pruebas con error
console.log(obtenerIniciales(12345));                     // Entrada inválida
console.log(obtenerIniciales(""));                        // Entrada inválida
