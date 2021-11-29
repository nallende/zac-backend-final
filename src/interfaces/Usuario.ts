export interface IUsuario {
  idusuario: number;
  usuaNombre: string;
  usuaApellido: string;
  usuaMail: string;
  usuaTelefono: string;
  usuaLogin: string;
  usuaPassword: string;
  usuaFeccre: Date;
  usuaFecmod:  Date | null;
  usuaEstado: number;
  [k: string]: any;
}
