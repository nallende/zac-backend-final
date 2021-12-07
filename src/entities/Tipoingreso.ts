import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tipoingreso", { schema: "zac_cloud" })
export class TipoIngreso {
  @PrimaryGeneratedColumn({ type: "int", name: "idtipoingreso" })
  idtipoingreso: number;

  @Column("varchar", { name: "nombre", length: 50 })
  nombre: string;

  @Column("tinyint", { name: "estado", width: 1, default: () => "'1'" })
  estado: boolean;

  @Column("datetime", { name: "fecha", default: () => "CURRENT_TIMESTAMP" })
  fecha: Date;
}
