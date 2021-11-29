import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ModuloEmpresa } from "./ModuloEmpresa";
import { UsuarioEmpresa } from "./UsuarioEmpresa";

@Entity("empresa", { schema: "zac" })
export class Empresa {
  @PrimaryGeneratedColumn({ type: "int", name: "idempresa" })
  public idempresa!: number;

  @Column("varchar", { name: "empr_nombre", length: 60 })
  public emprNombre!: string;

  @Column("varchar", { name: "empr_rut", length: 13 })
  public emprRut!: string;

  @Column("varchar", { name: "empr_direccion", length: 80 })
  public emprDireccion!: string;

  @Column("varchar", { name: "empr_telefono", length: 15 })
  public emprTelefono!: string;

  @Column("varchar", { name: "empr_mail", length: 80 })
  public emprMail!: string;

  @Column("varchar", { name: "empr_contacto", length: 45 })
  public emprContacto!: string;

  @Column("varchar", { name: "empr_imagen", nullable: true, length: 45 })
  public emprImagen!: string | null;

  @Column("tinyint", { name: "empr_estado" })
  public emprEstado!: number;

  @Column("date", { name: "empr_feccre" })
  emprFeccre!: string;

  @Column("date", { name: "empr_fecmod" })
  public emprFecmod!: string;

  @OneToMany(() => ModuloEmpresa, (moduloEmpresa) => moduloEmpresa.idempresa2)
  public moduloEmpresas!: ModuloEmpresa[];

  @OneToMany(
    () => UsuarioEmpresa,
    (usuarioEmpresa) => usuarioEmpresa.idempresa2
  )
  public usuarioEmpresas!: UsuarioEmpresa[];
}
