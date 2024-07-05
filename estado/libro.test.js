const assert = require('assert');
const Libro = require('./libro');

test('Prueba de transición de estado en el sistema de préstamos de libros', () => {
  let libro = new Libro();

  // Estado inicial: Disponible
  expect(libro.estado).toBe('Disponible');

  // Solicitar préstamo: Disponible -> Prestado
  libro.solicitarPrestamo();
  expect(libro.estado).toBe('Prestado');

  // Devolver libro: Prestado -> Devuelto
  libro.devolverLibro();
  expect(libro.estado).toBe('Devuelto');

  // Procesar devolución: Devuelto -> Disponible
  libro.procesarDevolucion();
  expect(libro.estado).toBe('Disponible');

  // Reservar libro: Disponible -> Reservado
  libro.reservarLibro();
  expect(libro.estado).toBe('Reservado');

  // Recoger reserva: Reservado -> Prestado
  libro.recogerReserva();
  expect(libro.estado).toBe('Prestado');
});
