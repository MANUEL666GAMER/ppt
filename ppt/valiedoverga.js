
let maxJugadores = '2'; 
let contadorPartidas = 0; 
let maxPartidas = 5; 
let Jugadores; 
const rl = require("readline-sync");

do {
  Jugadores = rl.question("¿Cuantos jugadores seran? ");
  if (Jugadores !== maxJugadores) {
    console.log("El número de jugadores no puede ser más de 2 o menos de 2");
  }
} while (Jugadores !== maxJugadores);

console.log("Comienza el juego");

// Incrementar el número de partidas de 0 a 1
while (contadorPartidas < maxPartidas) {
  contadorPartidas++;
}

const partidas = rl.question("¿Cuantas partidas deseas jugar?", {});

const readline = require('readline');

function obtenerOpcion() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const array1 = ['piedra', 'papel', 'tijera'];
  return new Promise ((resolve) => {

    array1.forEach((opcion, index) => {
      console.log(`${index + 1}. ${opcion}`);
    });

    rl.question(`Ingresa el número de tu opción (1-${array1.length}): `, (answer) => {
      rl.close();

      const opcionSeleccionada = parseInt(answer);
      if (opcionSeleccionada >= 1 && opcionSeleccionada <= array1.length) {
        resolve(array1[opcionSeleccionada - 1]);
      } else {
        resolve(null); // Opción inválida
      }
    });
  });
};

async function jugar() {
  const play = []

  const jugador1 = await obtenerOpcion(1);
  const jugador2 = await obtenerOpcion(2);

  function compararJugadores(opcionJugador1, opcionJugador2) {
    if (opcionJugador1 === opcionJugador2) {
      return 'Empate';
    }
    if (opcionJugador1 === 'piedra' && opcionJugador2 === 'tijera') {
      return 'Gana el jugador 1';
    }
    if (opcionJugador1 === 'piedra' && opcionJugador2 === 'papel') {
      return 'Gana el jugador 2';
    }
    if (opcionJugador1 === 'papel' && opcionJugador2 === 'tijera') {
      return 'Gana el jugador 2';
    }
    if (opcionJugador1 === 'papel' && opcionJugador2 === 'piedra') {
      return 'Gana el jugador 1';
    }
    if (opcionJugador1 === 'tijera' && opcionJugador2 === 'piedra') {
      return 'Gana el jugador 2';
    }
    if (opcionJugador1 === 'tijera' && opcionJugador2 === 'papel') {
      return 'Gana el jugador 1';
    }
  }
  console.log(compararJugadores(jugador1,jugador2));
}
// Ejecutar la función jugar el número de veces que se desee
(async () => {
  for (let i = 0; i < partidas; i++) {
    await jugar();
  }
})();
