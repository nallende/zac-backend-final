import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Empresa } from "./Empresa";
import { Usuario } from "./Usuario";

@Index("idempresa", ["idempresa"], {})
@Index("idusuario", ["idusuario"], {})
@Entity("usuario_empresa", { schema: "zac_cloud" })
export class UsuarioEmpresa {
  @PrimaryGeneratedColumn({ type: "int", name: "idusuarioempresa" })
  idusuarioempresa: number;

  @Column("int", { name: "idusuario" })
  idusuario: number;

  @Column("int", { name: "idempresa" })
  idempresa: number;

  @Column("tinyint", { name: "estado", width: 1, default: () => "'1'" })
  estado: boolean;

  @Column("datetime", { name: "fecha", default: () => "CURRENT_TIMESTAMP" })
  fecha: Date;

  @ManyToOne(() => Empresa, (empresa) => empresa.usuarioEmpresas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idempresa", referencedColumnName: "idempresa" }])
  idempresa2: Empresa;

  @ManyToOne(() => Usuario, (usuario) => usuario.usuarioEmpresas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "idusuario", referencedColumnName: "idusuario" }])
  idusuario2: Usuario;
}
