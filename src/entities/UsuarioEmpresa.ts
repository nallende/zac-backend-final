import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Usuario } from "./Usuario";
import { Empresa } from "./Empresa";
import { SharedProp } from "./sharedProp.helper";

@Index("idempresa_idx", ["idempresa"], {})
@Index("isusuario_idx", ["idusuario"], {})
@Entity("usuario_empresa", { schema: "zac" })
export class UsuarioEmpresa extends SharedProp{
  @PrimaryGeneratedColumn({ type: "int", name: "idusuario_empresa" })
  idusuarioEmpresa: number;

  @Column("int", { primary: true, name: "idusuario" })
  idusuario: number;

  @Column("int", { primary: true, name: "idempresa" })
  idempresa: number;

  // @Column("datetime", { name: "usem_feccre", nullable: true })
  // usemFeccre: Date | null;

  // @Column("datetime", { name: "usem_fecmod", nullable: true })
  // usemFecmod: Date | null;

  @Column("tinyint", { name: "usem_estado", nullable: true })
  usemEstado: number | null;

  @ManyToOne(() => Usuario, (usuario) => usuario.usuarioEmpresas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idusuario", referencedColumnName: "idusuario" }])
  idusuario2: Usuario;

  @ManyToOne(() => Empresa, (empresa) => empresa.usuarioEmpresas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idempresa", referencedColumnName: "idempresa" }])
  idempresa2: Empresa;
}
