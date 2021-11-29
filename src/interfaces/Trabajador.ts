export interface Trabajador {
  idempresa?: number;
  idtrabajador?: number;
  trab_nombre?: string;
  trab_apellidop?: string;
  trab_apellidom?: string;
  trab_rut?: string;
  trab_direccion?: string;
  trab_telefono?: string;
  trab_mail?: string;
  trab_feccre?: string;
  trab_fecmod?: string;
  trab_estado?: number;
  [k: string]: any;
}
