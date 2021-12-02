import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Empresa } from "./Empresa";
import { Modulo } from "./Modulo";

@Index("idempresa", ["idempresa"], {})
@Index("idmodulo", ["idmodulo"], {})
@Entity("modulo_empresa", { schema: "zac_cloud" })
export class ModuloEmpresa {
  @PrimaryGeneratedColumn({ type: "int", name: "idmoduloempresa" })
  idmoduloempresa: number;

  @Column("int", { name: "idmodulo" })
  idmodulo: number;

  @Column("int", { name: "idempresa" })
  idempresa: number;

  @Column("tinyint", { name: "estado", width: 1, default: () => "'1'" })
  estado: boolean;

  @Column("datetime", { name: "fecha", default: () => "CURRENT_TIMESTAMP" })
  fecha: Date;

  @ManyToOne(() => Empresa, (empresa) => empresa.moduloEmpresas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idempresa", referencedColumnName: "idempresa" }])
  idempresa2: Empresa;

  @ManyToOne(() => Modulo, (modulo) => modulo.moduloEmpresas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idmodulo", referencedColumnName: "idmodulo" }])
  idmodulo2: Modulo;
}
