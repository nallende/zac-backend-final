import { Column, Entity, OneToMany } from "typeorm";
import { AfpTrabajador } from "./AfpTrabajador";
import { SaludTrabajador } from "./SaludTrabajador";

@Entity("trabajador", { schema: "zac" })
export class Trabajador {
  @Column("int", { primary: true, name: "idempresa" })
  idempresa: number;

  @Column("int", { primary: true, name: "idtrabajador" })
  idtrabajador: number;

  @Column("varchar", { name: "trab_nombre", length: 45 })
  trabNombre: string;

  @Column("varchar", { name: "trab_apellidop", length: 45 })
  trabApellidop: string;

  @Column("varchar", { name: "trab_apellidom", length: 45 })
  trabApellidom: string;

  @Column("varchar", { name: "trab_rut", length: 12 })
  trabRut: string;

  @Column("varchar", { name: "trab_direccion", length: 80 })
  trabDireccion: string;

  @Column("varchar", { name: "trab_telefono", length: 15 })
  trabTelefono: string;

  @Column("varchar", { name: "trab_mail", nullable: true, length: 80 })
  trabMail: string | null;

  @Column("datetime", { name: "trab_feccre" })
  trabFeccre: Date;

  @Column("datetime", { name: "trab_fecmod" })
  trabFecmod: Date;

  @Column("tinyint", { name: "trab_estado" })
  trabEstado: number;

  @OneToMany(
    () => AfpTrabajador,
    (afpTrabajador) => afpTrabajador.idtrabajador2
  )
  afpTrabajadors: AfpTrabajador[];

  @OneToMany(
    () => SaludTrabajador,
    (saludTrabajador) => saludTrabajador.idtrabajador2
  )
  saludTrabajadors: SaludTrabajador[];
}
