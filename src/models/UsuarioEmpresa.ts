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

@Index("idempresa_idx", ["idempresa"], {})
@Index("isusuario_idx", ["idusuario"], {})
@Entity("usuario_empresa", { schema: "zac" })
export class UsuarioEmpresa {
  @PrimaryGeneratedColumn({ type: "int", name: "idusuario_empresa" })
  public idusuarioEmpresa!: number;

  @Column("int", { primary: true, name: "idusuario" })
  public idusuario!: number;

  @Column("int", { primary: true, name: "idempresa" })
  public idempresa!: number;

  @Column("datetime", { name: "usem_feccre", nullable: true })
  public usemFeccre!: Date | null;

  @Column("datetime", { name: "usem_fecmod", nullable: true })
  public usemFecmod!: Date | null;

  @Column("tinyint", { name: "usem_estado", nullable: true })
  public usemEstado!: number | null;

  @ManyToOne(() => Usuario, (usuario) => usuario.usuarioEmpresas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idusuario", referencedColumnName: "idusuario" }])
  public idusuario2!: Usuario;

  @ManyToOne(() => Empresa, (empresa) => empresa.usuarioEmpresas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idempresa", referencedColumnName: "idempresa" }])
  public idempresa2!: Empresa;
}
