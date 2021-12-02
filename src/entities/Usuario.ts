import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UsuarioEmpresa } from "./UsuarioEmpresa";

@Entity("usuario", { schema: "zac_cloud" })
export class Usuario {
  @PrimaryGeneratedColumn({ type: "int", name: "idusuario" })
  idusuario: number;

  @Column("varchar", { name: "nombre", length: 50 })
  nombre: string;

  @Column("varchar", { name: "apellido", length: 50 })
  apellido: string;

  @Column("varchar", { name: "email", length: 50 })
  email: string;

  @Column("varchar", { name: "login", length: 50 })
  login: string;

  @Column("varchar", { name: "password", length: 16 })
  password: string;

  @Column("int", { name: "estado", default: () => "'1'" })
  estado: number;

  @Column("datetime", { name: "fecha", default: () => "CURRENT_TIMESTAMP" })
  fecha: Date;

  @OneToMany(
    () => UsuarioEmpresa,
    (usuarioEmpresa) => usuarioEmpresa.idusuario2
  )
  usuarioEmpresas: UsuarioEmpresa[];
}
