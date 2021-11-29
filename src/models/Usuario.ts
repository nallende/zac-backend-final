import { IsDate, IsNotEmpty, IsNumber, Length } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UsuarioEmpresa } from "./UsuarioEmpresa";


@Entity("usuario", { schema: "zac" })
export class Usuario {
  constructor(
  usuaNombre: string,
  usuaApellido: string,
  usuaMail: string,
  usuaTelefono: string,
  usuaLogin: string,
  usuaPassword: string,
  usuaFeccre: Date,
  usuaFecmod:  Date | null,
  usuaEstado: number,
  ){
    this.usuaNombre = usuaNombre;
    this.usuaApellido = usuaApellido;
    this.usuaMail = usuaMail;
    this.usuaTelefono = usuaTelefono;
    this.usuaLogin = usuaLogin;
    this.usuaPassword = usuaPassword;
    this.usuaFeccre = usuaFeccre;
    this.usuaFecmod = usuaFecmod;
    this.usuaEstado = usuaEstado;
    }

  
  @PrimaryGeneratedColumn({ type: "int", name: "idusuario" })
  public idusuario!: number;

  @Column("varchar", { name: "usua_nombre", length: 60 })
  @Length(4, 100) @IsNotEmpty()
  public usuaNombre!: string;

  @Column("varchar", { name: "usua_apellido", length: 45 })
  @Length(4, 100) @IsNotEmpty()
  public usuaApellido!: string;

  @Column("varchar", { name: "usua_mail", length: 80 })
  @Length(4, 100) @IsNotEmpty()
  public usuaMail!: string;

  @Column("varchar", { name: "usua_telefono", length: 45 })
  @Length(4, 100) @IsNotEmpty()
  public usuaTelefono!: string;

  @Column("varchar", { name: "usua_login", length: 45 })
  @Length(4, 100) @IsNotEmpty()
  public usuaLogin!: string;

  @Column("varchar", { name: "usua_password", length: 64 })
  @Length(4, 10) @IsNotEmpty()
  public usuaPassword!: string;

  // public hashPassword() {
  //   this.password = bcrypt.hashSync(this.password, 8);
  // }

  @Column("datetime", { name: "usua_feccre" })
  @IsDate()
  public usuaFeccre!: Date;

  @Column("datetime", { name: "usua_fecmod", nullable: true })
  @IsDate()
  public usuaFecmod!: Date | null;

  @Column("tinyint", { name: "usua_estado" })
  @IsNumber()
  usuaEstado!: number;

  @OneToMany(
    () => UsuarioEmpresa,
    (usuarioEmpresa) => usuarioEmpresa.idusuario2
  )
  public usuarioEmpresas!: UsuarioEmpresa[];
}
