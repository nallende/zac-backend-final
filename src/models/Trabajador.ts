import { Column, Entity, OneToMany } from "typeorm";
import { AfpTrabajador } from "./AfpTrabajador";

@Entity("trabajador", { schema: "zac" })
export class Trabajador {
  @Column("int", { primary: true, name: "idempresa" })
  public idempresa!: number;

  @Column("int", { primary: true, name: "idtrabajador" })
  public idtrabajador!: number;

  @Column("varchar", { name: "trab_nombre", length: 45 })
  public trabNombre!: string;

  @Column("varchar", { name: "trab_apellidop", length: 45 })
  public trabApellidop!: string;

  @Column("varchar", { name: "trab_apellidom", length: 45 })
  public trabApellidom!: string;

  @Column("varchar", { name: "trab_rut", length: 12 })
  public trabRut!: string;

  @Column("varchar", { name: "trab_direccion", length: 80 })
  public trabDireccion!: string;

  @Column("varchar", { name: "trab_telefono", length: 15 })
  public trabTelefono!: string;

  @Column("varchar", { name: "trab_mail", nullable: true, length: 80 })
  public trabMail!: string | null;

  @Column("datetime", { name: "trab_feccre" })
  public trabFeccre!: Date;

  @Column("datetime", { name: "trab_fecmod" })
  public trabFecmod!: Date;

  @Column("tinyint", { name: "trab_estado" })
  public trabEstado!: number;

  @OneToMany(
    () => AfpTrabajador,
    (afpTrabajador) => afpTrabajador.idtrabajador2
  )
  afpTrabajadors!: AfpTrabajador[];
}
