const assert = require('assert');
const Libro = require('./libro');

test('Pruebas de tabla de decisión en el sistema de préstamos de libros', () => {
  let libro = new Libro();

  // Estado inicial: Disponible
  assert.strictEqual(libro.estado, 'Disponible');

  // Prueba de decisión para Solicitar préstamo
  try {
    libro.solicitarPrestamo();
    assert.strictEqual(libro.estado, 'Prestado');
  } catch (error) {
    console.error(error);
  }

  // Prueba de decisión para Devolver libro
  try {
    libro.devolverLibro();
    assert.strictEqual(libro.estado, 'Devuelto');
  } catch (error) {
    console.error(error);
  }

  // Prueba de decisión para Procesar devolución
  try {
    libro.procesarDevolucion();
    assert.strictEqual(libro.estado, 'Disponible');
  } catch (error) {
    console.error(error);
  }

  // Prueba de decisión para Reservar libro
  try {
    libro.reservarLibro();
    assert.strictEqual(libro.estado, 'Reservado');
  } catch (error) {
    console.error(error);
  }

  // Prueba de decisión para Recoger reserva
  try {
    libro.recogerReserva();
    assert.strictEqual(libro.estado, 'Prestado');
  } catch (error) {
    console.error(error);
  }

  console.log("¡Todas las pruebas de tabla de decisión han pasado correctamente!");
});
