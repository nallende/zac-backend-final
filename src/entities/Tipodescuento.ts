import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Descuento } from "./Descuento";

@Entity("tipodescuento", { schema: "zac_cloud" })
export class Tipodescuento {
  @PrimaryGeneratedColumn({ type: "int", name: "idtipodescuento" })
  idtipodescuento: number;

  @Column("varchar", { name: "nombre", length: 50 })
  nombre: string;

  @Column("tinyint", { name: "estado", width: 1, default: () => "'1'" })
  estado: boolean;

  @Column("datetime", { name: "fecha", default: () => "CURRENT_TIMESTAMP" })
  fecha: Date;

  @OneToMany(() => Descuento, (descuento) => descuento.idtipodescuento2)
  descuentos: Descuento[];
}
