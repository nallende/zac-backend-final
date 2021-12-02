import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contrato } from "./Contrato";

@Entity("salud", { schema: "zac_cloud" })
export class Salud {
  @PrimaryGeneratedColumn({ type: "int", name: "idsalud" })
  idsalud: number;

  @Column("varchar", { name: "nombre", length: 50 })
  nombre: string;

  @Column("tinyint", { name: "estado", default: () => "'1'" })
  estado: number;

  @Column("datetime", { name: "fecha", default: () => "CURRENT_TIMESTAMP" })
  fecha: Date;

  @OneToMany(() => Contrato, (contrato) => contrato.idsalud2)
  contratoes: Contrato[];
}
