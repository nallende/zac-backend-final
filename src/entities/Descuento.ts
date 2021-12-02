import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contrato } from "./Contrato";
import { Tipodescuento } from "./Tipodescuento";

@Index("idcontrato", ["idcontrato"], {})
@Index("idtipodescuento", ["idtipodescuento"], {})
@Entity("descuento", { schema: "zac_cloud" })
export class Descuento {
  @PrimaryGeneratedColumn({ type: "int", name: "iddescuento" })
  iddescuento: number;

  @Column("int", { name: "idcontrato" })
  idcontrato: number;

  @Column("int", { name: "idtipodescuento" })
  idtipodescuento: number;

  @Column("varchar", { name: "descripcion", length: 100 })
  descripcion: string;

  @Column("int", { name: "valor" })
  valor: number;

  @Column("date", { name: "fechadescuento" })
  fechadescuento: string;

  @Column("datetime", { name: "fecha", default: () => "CURRENT_TIMESTAMP" })
  fecha: Date;

  @ManyToOne(() => Contrato, (contrato) => contrato.descuentos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idcontrato", referencedColumnName: "idcontrato" }])
  idcontrato2: Contrato;

  @ManyToOne(() => Tipodescuento, (tipodescuento) => tipodescuento.descuentos, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "idtipodescuento", referencedColumnName: "idtipodescuento" },
  ])
  idtipodescuento2: Tipodescuento;
}
