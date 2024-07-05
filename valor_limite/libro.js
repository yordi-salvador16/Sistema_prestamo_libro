class Libro {
    constructor() {
      this.estado = 'Disponible';
    }
  
    solicitarPrestamo() {
      if (this.estado === 'Disponible') {
        this.estado = 'Prestado';
      } else {
        throw new Error(`No se puede solicitar préstamo en el estado ${this.estado}`);
      }
    }
  
    devolverLibro() {
      if (this.estado === 'Prestado') {
        this.estado = 'Devuelto';
      } else {
        throw new Error(`No se puede devolver el libro en el estado ${this.estado}`);
      }
    }
  
    procesarDevolucion() {
      if (this.estado === 'Devuelto') {
        this.estado = 'Disponible';
      } else {
        throw new Error(`No se puede procesar la devolución en el estado ${this.estado}`);
      }
    }
  
    reservarLibro() {
      if (this.estado === 'Disponible' || this.estado === 'Devuelto') {
        this.estado = 'Reservado';
      } else {
        throw new Error(`No se puede reservar en el estado ${this.estado}`);
      }
    }
  
    recogerReserva() {
      if (this.estado === 'Reservado') {
        this.estado = 'Prestado';
      } else {
        throw new Error(`No se puede recoger la reserva en el estado ${this.estado}`);
      }
    }
  }
  
  module.exports = Libro;
  