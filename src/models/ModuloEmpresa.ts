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
  public idmoduloEmpresa!: number;

  @Column("int", { primary: true, name: "idmodulo" })
  public idmodulo!: number;

  @Column("int", { primary: true, name: "idempresa" })
  public idempresa!: number;

  @Column("datetime", { name: "moem_feccre", nullable: true })
  public moemFeccre!: Date | null;

  @Column("datetime", { name: "moem_fecmod", nullable: true })
  public moemFecmod?: Date | null;

  @Column("tinyint", { name: "moem_estado", nullable: true })
  public moemEstado!: number | null;

  @ManyToOne(() => Modulo, (modulo) => modulo.moduloEmpresas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idmodulo", referencedColumnName: "idmodulo" }])
  public idmodulo2!: Modulo;

  @ManyToOne(() => Empresa, (empresa) => empresa.moduloEmpresas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idempresa", referencedColumnName: "idempresa" }])
  public idempresa2!: Empresa;
}
