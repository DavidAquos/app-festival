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
  artistas: string[];
  descripcion: string;
  zona: string;
  img: string;
  img_mapa: string;
}

export interface Taller {
  _id: string;
  nombre: string;
  horario: string;
  descripcion: string;
  zona: string;
  img: string;
  img_mapa: string;
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

export interface Mapa {
  imagen: string;
  puntos: string[];
}
