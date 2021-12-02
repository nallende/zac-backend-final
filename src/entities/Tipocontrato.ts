import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contrato } from "./Contrato";

@Entity("tipocontrato", { schema: "zac_cloud" })
export class Tipocontrato {
  @PrimaryGeneratedColumn({ type: "int", name: "idtipocontrato" })
  idtipocontrato: number;

  @Column("varchar", { name: "nombre", length: 50 })
  nombre: string;

  @Column("tinyint", { name: "estado", width: 1, default: () => "'1'" })
  estado: boolean;

  @Column("datetime", { name: "fecha", default: () => "CURRENT_TIMESTAMP" })
  fecha: Date;

  @OneToMany(() => Contrato, (contrato) => contrato.idtipocontrato2)
  contratoes: Contrato[];
}
