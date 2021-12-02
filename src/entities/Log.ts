import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("log", { schema: "zac_cloud" })
export class Log {
  @PrimaryGeneratedColumn({ type: "int", name: "idlog" })
  idlog: number;

  @Column("varchar", { name: "accion", length: 50 })
  accion: string;

  @Column("varchar", { name: "usuario", length: 50 })
  usuario: string;

  @Column("date", { name: "fecha" })
  fecha: string;
}
