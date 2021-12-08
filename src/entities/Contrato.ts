import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Afp } from "./Afp";
import { Cargo } from "./Cargo";
import { Personal } from "./Personal";
import { Salud } from "./Salud";
import { Tipocontrato } from "./Tipocontrato";
import { Descuento } from "./Descuento";

@Index("idafp", ["idafp"], {})
@Index("idcargo", ["idcargo"], {})
@Index("idpersonal", ["idpersonal"], {})
@Index("idsalud", ["idsalud"], {})
@Index("idtipocontrato", ["idtipocontrato"], {})
@Entity("contrato", { schema: "zac_cloud" })
export class Contrato {





  
  @PrimaryGeneratedColumn({ type: "int", name: "idcontrato" })
  idcontrato: number;

  @Column("int", { name: "idtipocontrato" })
  idtipocontrato: number;

  @Column("int", { name: "idcargo" })
  idcargo: number;

  @Column("int", { name: "idpersonal" })
  idpersonal: number;

  @Column("int", { name: "idafp" })
  idafp: number;

  @Column("int", { name: "idsalud" })
  idsalud: number;

  @Column("int", { name: "sueldobase" })
  sueldobase: number;

  @Column("float", { name: "porcentajeafp", precision: 22 })
  porcentajeafp: number;

  @Column("float", { name: "porcentajesalud", precision: 22 })
  porcentajesalud: number;

  @Column("date", { name: "fechacontrato" })
  fechacontrato: string;

  @Column("date", { name: "fechafiniquito", nullable: true })
  fechafiniquito: string | null;

  @Column("date", { name: "fechamovimiento" })
  fechamovimiento: string;

  @Column("tinyint", { name: "estado", width: 1, default: () => "'1'" })
  estado: boolean;

  @Column("datetime", { name: "fecha", default: () => "CURRENT_TIMESTAMP" })
  fecha: Date;

  @ManyToOne(() => Afp, (afp) => afp.contratoes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idafp", referencedColumnName: "idafp" }])
  idafp2: Afp;

  @ManyToOne(() => Cargo, (cargo) => cargo.contratoes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idcargo", referencedColumnName: "idcargo" }])
  idcargo2: Cargo;

  @ManyToOne(() => Personal, (personal) => personal.contratoes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idpersonal", referencedColumnName: "idpersonal" }])
  idpersonal2: Personal;

  @ManyToOne(() => Salud, (salud) => salud.contratoes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idsalud", referencedColumnName: "idsalud" }])
  idsalud2: Salud;

  @ManyToOne(() => Tipocontrato, (tipocontrato) => tipocontrato.contratoes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "idtipocontrato", referencedColumnName: "idtipocontrato" },
  ])
  idtipocontrato2: Tipocontrato;

  @OneToMany(() => Descuento, (descuento) => descuento.idcontrato2)
  descuentos: Descuento[];
}
