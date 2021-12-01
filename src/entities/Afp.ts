import { Column, Entity, OneToMany } from "typeorm";
import { AfpTrabajador } from "./AfpTrabajador";

@Entity("afp", { schema: "zac" })
export class Afp {
  @Column("int", { primary: true, name: "idempresa" })
  idempresa: number;

  @Column("int", { primary: true, name: "idafp" })
  idafp: number;

  @Column("varchar", { name: "afp_nombre", length: 60 })
  afpNombre: string;

  @Column("varchar", { name: "afp_contacto", nullable: true, length: 45 })
  afpContacto: string | null;

  @Column("varchar", { name: "afp_telefono", nullable: true, length: 12 })
  afpTelefono: string | null;

  @Column("varchar", { name: "afp_mail", nullable: true, length: 80 })
  afpMail: string | null;

  @Column("datetime", { name: "afp_feccre" })
  afpFeccre: Date;

  @Column("datetime", { name: "afp_fecmod" })
  afpFecmod: Date;

  @Column("tinyint", { name: "afp_estado" })
  afpEstado: number;

  @OneToMany(() => AfpTrabajador, (afpTrabajador) => afpTrabajador.idafp2)
  afpTrabajadors: AfpTrabajador[];
}
