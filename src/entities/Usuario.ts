import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SharedProp } from "./sharedProp.helper";
import { UsuarioEmpresa } from "./UsuarioEmpresa";

@Entity("usuario", { schema: "zac" })
export class Usuario  extends SharedProp {
  @PrimaryGeneratedColumn({ type: "int", name: "idusuario" })
  idusuario: number;

  @Column("varchar", { name: "usua_nombre", length: 60 })
  usuaNombre: string;

  @Column("varchar", { name: "usua_apellido", length: 45 })
  usuaApellido: string;

  @Column("varchar", { name: "usua_mail", length: 80 })
  usuaMail: string;

  @Column("varchar", { name: "usua_telefono", length: 45 })
  usuaTelefono: string;

  @Column("varchar", { name: "usua_login", length: 45 })
  usuaLogin: string;

  @Column("varchar", { name: "usua_password", length: 64 })
  usuaPassword: string;

  // @Column("datetime", { name: "usua_feccre" })
  // usuaFeccre: Date;

  // @Column("datetime", { name: "usua_fecmod", nullable: true })
  // usuaFecmod: Date | null;

  @Column("tinyint", { name: "usua_estado" })
  usuaEstado: number;

  @OneToMany(
    () => UsuarioEmpresa,
    (usuarioEmpresa) => usuarioEmpresa.idusuario2
  )
  usuarioEmpresas: UsuarioEmpresa[];
}
