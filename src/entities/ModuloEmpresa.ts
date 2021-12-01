import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Modulo } from "./Modulo";
import { Empresa } from "./Empresa";

@Index("idmepresa_idx", ["idempresa"], {})
@Index("idmodulo_idx", ["idmodulo"], {})
@Entity("modulo_empresa", { schema: "zac" })
export class ModuloEmpresa {
  @PrimaryGeneratedColumn({ type: "int", name: "idmodulo_empresa" })
  idmoduloEmpresa: number;

  @Column("int", { primary: true, name: "idmodulo" })
  idmodulo: number;

  @Column("int", { primary: true, name: "idempresa" })
  idempresa: number;

  @Column("datetime", { name: "moem_feccre", nullable: true })
  moemFeccre: Date | null;

  @Column("datetime", { name: "moem_fecmod", nullable: true })
  moemFecmod: Date | null;

  @Column("tinyint", { name: "moem_estado", nullable: true })
  moemEstado: number | null;

  @ManyToOne(() => Modulo, (modulo) => modulo.moduloEmpresas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idmodulo", referencedColumnName: "idmodulo" }])
  idmodulo2: Modulo;

  @ManyToOne(() => Empresa, (empresa) => empresa.moduloEmpresas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idempresa", referencedColumnName: "idempresa" }])
  idempresa2: Empresa;
}
