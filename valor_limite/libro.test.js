const assert = require('assert');
const Libro = require('./libro');

test('Prueba de análisis de valor límite en el sistema de préstamos de libros', () => {
  let libro = new Libro();

  // Estado inicial: Disponible
  expect(libro.estado).toBe('Disponible');

  // Solicitar préstamo: Estado inicial válido
  libro.solicitarPrestamo();
  expect(libro.estado).toBe('Prestado');

  // Devolver libro: Estado inicial válido
  libro.devolverLibro();
  expect(libro.estado).toBe('Devuelto');

  // Procesar devolución: Estado inicial válido
  libro.procesarDevolucion();
  expect(libro.estado).toBe('Disponible');

  // Reservar libro: Estado inicial y final válidos
  libro.reservarLibro();
  expect(libro.estado).toBe('Reservado');

  // Recoger reserva: Estado final válido
  libro.recogerReserva();
  expect(libro.estado).toBe('Prestado');
});
