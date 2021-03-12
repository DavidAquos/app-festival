export interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
  lines: string;
}

export interface Actuacion {
  nombre: string;
  horario: string;
  artistas: string[];
  descripcion: string;
  img: string;
  id: string;
}

export interface Taller {
  nombre: string;
  horario: string;
  descripcion: string;
  img: string;
  id: string;
}
