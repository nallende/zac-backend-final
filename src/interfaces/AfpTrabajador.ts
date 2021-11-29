export interface AfpTrabajador {
  idempresa?: number;
  idafp_trabajador?: number;
  idafp?: number;
  idtrabajador?: number;
  afp_porcentaje?: number;
  aftr_feccre?: string;
  aftr_fecmod?: string;
  aftr_estado?: number;
  [k: string]: any;
}
