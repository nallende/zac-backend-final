import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cargo", { schema: "zac" })
export class Cargo {
  @Column("int", { name: "idempresa" })
  idempresa: number;

  @PrimaryGeneratedColumn({ type: "int", name: "idcargo" })
  idcargo: number;

  @Column("varchar", { name: "carg_nombre", length: 45 })
  cargNombre: string;

  @Column("datetime", { name: "carg_feccre" })
  cargFeccre: Date;

  @Column("datetime", { name: "carg_fecmod" })
  cargFecmod: Date;

  @Column("tinyint", { name: "carg_estado" })
  cargEstado: number;
}
