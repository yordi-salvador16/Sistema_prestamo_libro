const assert = require('assert');
const Libro = require('./libro');

test('Pruebas de partición de equivalencia en el sistema de préstamos de libros', () => {
  let libro = new Libro();

  // Estado inicial: Disponible
  assert.strictEqual(libro.estado, 'Disponible');

  // Solicitar préstamo: Clase de equivalencia válida
  libro.solicitarPrestamo();
  assert.strictEqual(libro.estado, 'Prestado');

  // Devolver libro: Clase de equivalencia válida
  libro.devolverLibro();
  assert.strictEqual(libro.estado, 'Devuelto');

  // Procesar devolución: Clase de equivalencia válida
  libro.procesarDevolucion();
  assert.strictEqual(libro.estado, 'Disponible');

  // Reservar libro: Clase de equivalencia válida
  libro.reservarLibro();
  assert.strictEqual(libro.estado, 'Reservado');

  // Recoger reserva: Clase de equivalencia válida
  libro.recogerReserva();
  assert.strictEqual(libro.estado, 'Prestado');
});
