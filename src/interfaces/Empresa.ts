export interface Empresa {
  idempresa?: number;
  empr_nombre?: string;
  empr_rut?: string;
  empr_direccion?: string;
  empr_telefono?: string;
  empr_mail?: string;
  empr_contacto?: string;
  empr_imagen?: string;
  empr_estado?: number;
  empr_feccre?: string;
  empr_fecmod?: string;
  [k: string]: any;
}
