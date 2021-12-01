import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ModuloEmpresa } from "./ModuloEmpresa";

@Entity("modulo", { schema: "zac" })
export class Modulo {
  @PrimaryGeneratedColumn({ type: "int", name: "idmodulo" })
  idmodulo: number;

  @Column("varchar", { name: "modu_nombre", nullable: true, length: 45 })
  moduNombre: string | null;

  @Column("datetime", { name: "modu_feccrea", nullable: true })
  moduFeccrea: Date | null;

  @Column("datetime", { name: "modu_fecmod", nullable: true })
  moduFecmod: Date | null;

  @Column("tinyint", { name: "modu_estado", nullable: true })
  moduEstado: number | null;

  @OneToMany(() => ModuloEmpresa, (moduloEmpresa) => moduloEmpresa.idmodulo2)
  moduloEmpresas: ModuloEmpresa[];
}
