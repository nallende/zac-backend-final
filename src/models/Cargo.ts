import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cargo", { schema: "zac" })
export class Cargo {
  @Column("int", { primary: true, name: "idempresa" })
  public idempresa!: number;

  @PrimaryGeneratedColumn({ type: "int", name: "idcargo" })
  public idcargo!: number;

  @Column("varchar", { name: "carg_nombre", length: 45 })
  public cargNombre!: string;

  @Column("datetime", { name: "carg_feccre" })
  public cargFeccre!: Date;

  @Column("datetime", { name: "carg_fecmod" })
  public cargFecmod!: Date;

  @Column("tinyint", { name: "carg_estado" })
  public cargEstado!: number;
}
