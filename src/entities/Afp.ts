import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contrato } from "./Contrato";

@Entity("afp", { schema: "zac_cloud" })
export class Afp {
  @PrimaryGeneratedColumn({ type: "int", name: "idafp" })
  idafp: number;

  @Column("varchar", { name: "nombre", length: 50 })
  nombre: string;

  @Column("tinyint", { name: "estado", width: 1, default: () => "'1'" })
  estado: boolean;

  @Column("datetime", { name: "fecha", default: () => "CURRENT_TIMESTAMP" })
  fecha: Date;

  @OneToMany(() => Contrato, (contrato) => contrato.idafp2)
  contratoes: Contrato[];
}
