import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Trabajador } from "./Trabajador";
import { Afp } from "./Afp";

@Index("idafp_idx", ["idafp"], {})
@Index("idtrabajador_idx", ["idtrabajador"], {})
@Entity("afp_trabajador", { schema: "zac" })
export class AfpTrabajador {
  @Column("int", { primary: true, name: "idempresa" })
  public idempresa!: number;

  @Column("int", { primary: true, name: "idafp_trabajador" })
  public idafpTrabajador!: number;

  @Column("int", { primary: true, name: "idafp" })
  public idafp!: number;

  @Column("int", { primary: true, name: "idtrabajador" })
  public idtrabajador!: number;

  @Column("double", { name: "afp_porcentaje", nullable: true, precision: 22 })
  public afpPorcentaje!: number | null;

  @Column("datetime", { name: "aftr_feccre" })
  public aftrFeccre!: Date;

  @Column("datetime", { name: "aftr_fecmod" })
  public aftrFecmod!: Date;

  @Column("tinyint", { name: "aftr_estado" })
  public aftrEstado!: number;

  @ManyToOne(() => Trabajador, (trabajador) => trabajador.afpTrabajadors, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idtrabajador", referencedColumnName: "idtrabajador" }])
  public idtrabajador2!: Trabajador;

  @ManyToOne(() => Afp, (afp) => afp.afpTrabajadors, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idafp", referencedColumnName: "idafp" }])
  public idafp2!: Afp;
}
