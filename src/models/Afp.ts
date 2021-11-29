import { Column, Entity, OneToMany } from "typeorm";
import { AfpTrabajador } from "./AfpTrabajador";

@Entity("afp", { schema: "zac" })
export class Afp {
  @Column("int", { primary: true, name: "idempresa" })
  public idempresa!: number;

  @Column("int", { primary: true, name: "idafp" })
  public idafp!: number;

  @Column("varchar", { name: "afp_nombre", length: 60 })
  public afpNombre!: string;

  @Column("varchar", { name: "afp_contacto", nullable: true, length: 45 })
  public afpContacto!: string | null;

  @Column("varchar", { name: "afp_telefono", nullable: true, length: 12 })
  public afpTelefono!: string | null;

  @Column("varchar", { name: "afp_mail", nullable: true, length: 80 })
  public afpMail!: string | null;

  @Column("datetime", { name: "afp_feccre" })
  public afpFeccre!: Date;

  @Column("datetime", { name: "afp_fecmod" })
  public afpFecmod!: Date;

  @Column("tinyint", { name: "afp_estado" })
  public afpEstado!: number;

  @OneToMany(() => AfpTrabajador, (afpTrabajador) => afpTrabajador.idafp2)
  public afpTrabajadors!: AfpTrabajador[];
}
