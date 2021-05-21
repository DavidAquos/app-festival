export interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
  lines: string;
}

export interface Actuacion {
  _id: string;
  nombre: string;
  horario: string;
  fecha: string;
  artistas: string[];
  descripcion: string;
  img: string;
  img_mapa: string;
  ubicacion: string;
}

export interface Taller {
  _id: string;
  nombre: string;
  horario: string;
  fecha: string
  descripcion: string;
  img: string;
  img_mapa: string;
  ubicacion: string;
}

export interface TicketPrecios {
  nombre: string;
  precio: number;
  detalles: string[];
  link: string;
}

export interface TicketGestion {
  tipo: string;
  nombre: string;
  qr: number;
}

export interface ComoLlegar {
  nombre: string;
  ubicompleta: string;
  urlmapa: string;
  img: string;
}

export interface Mapa {
  imagen: string;
  puntos: string[];
}

export interface Question {
  question: string;
  answer: string;
}

export interface Restaurante {
  _id: string;
  nombre: string;
  imagen: string;
  imagenes_carta: string[];
  horario: string;
  img_mapa: string;
  localizacion: string;
}

export interface DatosContacto {
  _id: string;
  numero: string;
  correo: string;
}
