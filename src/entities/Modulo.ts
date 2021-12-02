import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ModuloEmpresa } from "./ModuloEmpresa";

@Entity("modulo", { schema: "zac_cloud" })
export class Modulo {
  @PrimaryGeneratedColumn({ type: "int", name: "idmodulo" })
  idmodulo: number;

  @Column("varchar", { name: "nombre", length: 100 })
  nombre: string;

  @Column("tinyint", { name: "estado", width: 1, default: () => "'1'" })
  estado: boolean;

  @Column("datetime", { name: "fecha", default: () => "CURRENT_TIMESTAMP" })
  fecha: Date;

  @OneToMany(() => ModuloEmpresa, (moduloEmpresa) => moduloEmpresa.idmodulo2)
  moduloEmpresas: ModuloEmpresa[];
}
