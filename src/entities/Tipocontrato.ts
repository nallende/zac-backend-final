import { Column, Entity } from "typeorm";

@Entity("tipocontrato", { schema: "zac" })
export class Tipocontrato {
  @Column("int", { primary: true, name: "idempresa" })
  idempresa: number;

  @Column("int", { primary: true, name: "idtipocontrato" })
  idtipocontrato: number;

  @Column("varchar", { name: "tico_nombre", length: 45 })
  ticoNombre: string;

  @Column("datetime", { name: "tico_feccre" })
  ticoFeccre: Date;

  @Column("datetime", { name: "tico_fecmod" })
  ticoFecmod: Date;

  @Column("tinyint", { name: "tico_estado" })
  ticoEstado: number;
}
