import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Salud } from "./Salud";
import { Trabajador } from "./Trabajador";

@Index("idsalud_idx", ["idsalud"], {})
@Index("idtrabajador_idx", ["idtrabajador"], {})
@Entity("salud_trabajador", { schema: "zac" })

export class SaludTrabajador {
  @PrimaryGeneratedColumn({ type: "int", name: "idsalud_trabajador" })
  idsaludTrabajador: number;

  @Column("int", {  name: "idempresa" })
  idempresa: number;

  @Column("int", { primary: true, name: "idsalud" })
  idsalud: number;

  @Column("int", { primary: true, name: "idtrabajador" })
  idtrabajador: number;

  @Column("float", { name: "satr_porcentaje", precision: 22 })
  satrPorcentaje: number;

  @Column("date", { name: "satr_feccre" })
  satrFeccre: Date;

  @Column("date", { name: "satr_fecmod" })
  satrFecmod: Date;

  @Column("tinyint", { name: "satr_estado" })
  satrEstado: number;

  @ManyToOne(() => Salud, (salud) => salud.saludTrabajadors, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idsalud", referencedColumnName: "idsalud" }])
  idsalud2: Salud;

  @ManyToOne(() => Trabajador, (trabajador) => trabajador.saludTrabajadors, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idtrabajador", referencedColumnName: "idtrabajador" }])
  idtrabajador2: Trabajador;
}
