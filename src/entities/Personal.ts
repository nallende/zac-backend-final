import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Contrato } from "./Contrato";

@Entity("personal", { schema: "zac_cloud" })
export class Personal {
  constructor(
    rut: string,
    nombre: string,
    apellidop: string,
    apellidom: string,
    direccion: string,
    telefono: number,
    email: string,
    estado: number,
    
  ) {
    this.rut = rut
    this.nombre = nombre
    this.apellidop = apellidop
    this.apellidom = apellidom
    this.direccion = direccion
    this.telefono = telefono 
    this.email = email
    this.estado = estado    
  }


  @PrimaryGeneratedColumn({ type: "int", name: "idpersonal" })
  idpersonal: number;

  @Column("varchar", { name: "rut", length: 12 })
  rut: string;

  @Column("varchar", { name: "nombre", length: 50 })
  nombre: string;

  @Column("varchar", { name: "apellidop", length: 50 })
  apellidop: string;

  @Column("varchar", { name: "apellidom", length: 50 })
  apellidom: string;

  @Column("varchar", { name: "direccion", length: 80 })
  direccion: string;

  @Column("int", { name: "telefono" })
  telefono: number;

  @Column("varchar", { name: "email", length: 60 })
  email: string;

  @Column("tinyint", { name: "estado", width: 1, default: () => "'1'" })
  estado: number;

  @Column("datetime", { name: "fecha", default: () => "CURRENT_TIMESTAMP" })
  fecha: Date;

  @OneToMany(() => Contrato, (contrato) => contrato.idpersonal2)
  contratoes: Contrato[];
}
