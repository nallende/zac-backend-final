export interface Salud {
  idempresa?: number;
  idsalud?: number;
  salu_nombre?: string;
  salu_contacto?: string;
  salu_telefono?: string;
  salu_mail?: string;
  salu_feccre?: string;
  salu_fecmod?: string;
  salu_estado?: number;
  [k: string]: any;
}
