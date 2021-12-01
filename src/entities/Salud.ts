import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SaludTrabajador } from "./SaludTrabajador";

@Entity("salud", { schema: "zac" })
export class Salud {
  @PrimaryGeneratedColumn({ type: "int", name: "idsalud" })
  idsalud: number;

  @Column("int", { name: "idempresa" })
  idempresa: number;

  @Column("varchar", { name: "salu_nombre", length: 80 })
  saluNombre: string;

  @Column("varchar", { name: "salu_contacto", length: 45 })
  saluContacto: string;

  @Column("varchar", { name: "salu_telefono", length: 12 })
  saluTelefono: string;

  @Column("varchar", { name: "salu_mail", length: 80 })
  saluMail: string;

  @Column("datetime", { name: "salu_feccre" })
  saluFeccre: Date;

  @Column("datetime", { name: "salu_fecmod" })
  saluFecmod: Date;

  @Column("tinyint", { name: "salu_estado" })
  saluEstado: number;

  @OneToMany(
    () => SaludTrabajador,
    (saludTrabajador) => saludTrabajador.idsalud
  )
  saludTrabajadors: SaludTrabajador[];
}
