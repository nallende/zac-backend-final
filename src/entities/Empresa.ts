import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ModuloEmpresa } from "./ModuloEmpresa";
import { UsuarioEmpresa } from "./UsuarioEmpresa";

@Entity("empresa", { schema: "zac" })
export class Empresa {
  @PrimaryGeneratedColumn({ type: "int", name: "idempresa" })
  idempresa: number;

  @Column("varchar", { name: "empr_nombre", length: 60 })
  emprNombre: string;

  @Column("varchar", { name: "empr_rut", length: 13 })
  emprRut: string;

  @Column("varchar", { name: "empr_direccion", length: 80 })
  emprDireccion: string;

  @Column("varchar", { name: "empr_telefono", length: 15 })
  emprTelefono: string;

  @Column("varchar", { name: "empr_mail", length: 80 })
  emprMail: string;

  @Column("varchar", { name: "empr_contacto", length: 45 })
  emprContacto: string;

  @Column("varchar", { name: "empr_imagen", nullable: true, length: 45 })
  emprImagen: string | null;

  @Column("tinyint", { name: "empr_estado" })
  emprEstado: number;

  @Column("date", { name: "empr_feccre" })
  emprFeccre: string;

  @Column("date", { name: "empr_fecmod" })
  emprFecmod: string;

  @OneToMany(() => ModuloEmpresa, (moduloEmpresa) => moduloEmpresa.idempresa2)
  moduloEmpresas: ModuloEmpresa[];

  @OneToMany(
    () => UsuarioEmpresa,
    (usuarioEmpresa) => usuarioEmpresa.idempresa2
  )
  usuarioEmpresas: UsuarioEmpresa[];
}
