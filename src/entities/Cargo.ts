import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contrato } from "./Contrato";

@Entity("cargo", { schema: "zac_cloud" })
export class Cargo {

constructor( nombre: string, estado: number){
  this.nombre = nombre
  this.estado = estado
}

  @PrimaryGeneratedColumn({ type: "int", name: "idcargo" })
  idcargo: number;

  @Column("varchar", { name: "nombre", length: 60 })
  nombre: string;

  @Column("tinyint", { name: "estado", width: 1, default: () => "'1'" })
  estado: number;

  @Column("timestamp", { name: "fecha", default: () => "CURRENT_TIMESTAMP" })
  fecha: Date;

  @OneToMany(() => Contrato, (contrato) => contrato.idcargo2)
  contratoes: Contrato[];
}
