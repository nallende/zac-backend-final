import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tipodescuento", { schema: "zac" })
export class Tipodescuento {
  @Column("int", { primary: true, name: "idempresa" })
  idempresa: number;

  @PrimaryGeneratedColumn({ type: "int", name: "idtipodescuento" })
  idtipodescuento: number;

  @Column("varchar", { name: "tide_nombre", nullable: true, length: 45 })
  tideNombre: string | null;

  @Column("datetime", { name: "tide_feccre", nullable: true })
  tideFeccre: Date | null;

  @Column("datetime", { name: "tide_fecmod", nullable: true })
  tideFecmod: Date | null;

  @Column("tinyint", { name: "tide_estado", nullable: true })
  tideEstado: number | null;
}
