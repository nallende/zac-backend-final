import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tipoabono", { schema: "zac" })
export class Tipoabono {
  @Column("int", { primary: true, name: "idempresa" })
  idempresa: number;

  @PrimaryGeneratedColumn({ type: "int", name: "idtipoabono" })
  idtipoabono: number;

  @Column("varchar", { name: "tiab_nombre", nullable: true, length: 45 })
  tiabNombre: string | null;

  @Column("datetime", { name: "tiab_feccre", nullable: true })
  tiabFeccre: Date | null;

  @Column("datetime", { name: "tiab_fecmod", nullable: true })
  tiabFecmod: Date | null;

  @Column("tinyint", { name: "tiab_estado", nullable: true })
  tiabEstado: number | null;
}
