import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ModuloEmpresa } from "./ModuloEmpresa";
import { UsuarioEmpresa } from "./UsuarioEmpresa";

@Entity("empresa", { schema: "zac_cloud" })
export class Empresa {

  constructor(
    nombre: string,
    direccion: string,
    telefono: number,
    mail: string,
    contacto: string,
    imagen: string,
    rut: number,
    estado: boolean,
  ) {
    this.nombre = nombre
    this.direccion = direccion
    this.telefono= telefono
    this.mail = mail
    this.contacto = contacto
    this.imagen = imagen
    this.rut = rut
    this.estado = estado
  }



  @PrimaryGeneratedColumn({ type: "int", name: "idempresa" })
  idempresa: number;

  @Column("varchar", { name: "nombre", length: 100 })
  nombre: string;

  @Column("varchar", { name: "direccion", length: 100 })
  direccion: string;

  @Column("int", { name: "telefono" })
  telefono: number;

  @Column("varchar", { name: "mail", length: 50 })
  mail: string;

  @Column("varchar", { name: "contacto", length: 100 })
  contacto: string;

  @Column("varchar", { name: "imagen", length: 100 })
  imagen: string;

  @Column("int", { name: "rut" })
  rut: number;

  @Column("tinyint", { name: "estado", width: 1, default: () => "'1'" })
  estado: boolean;

  @Column("datetime", { name: "fecha", default: () => "CURRENT_TIMESTAMP" })
  fecha: Date;

  @OneToMany(() => ModuloEmpresa, (moduloEmpresa) => moduloEmpresa.idempresa2)
  moduloEmpresas: ModuloEmpresa[];

  @OneToMany(
    () => UsuarioEmpresa,
    (usuarioEmpresa) => usuarioEmpresa.idempresa2
  )
  usuarioEmpresas: UsuarioEmpresa[];
}
