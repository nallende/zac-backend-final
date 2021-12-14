import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Links } from "./Links";

@Entity("users", { schema: "zac_cloud" })
export class Users {

   constructor(
     username:string,
     password:string,
     fullname:string ){
       this.username=username;
       this.password=password;
       this.fullname= fullname;
     }


  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "username", length: 35 })
  username: string;

  @Column("varchar", { name: "password", length: 60 })
  password: string;

  @Column("varchar", { name: "fullname", length: 100 })
  fullname: string;

  @OneToMany(() => Links, (links) => links.user)
  links: Links[];
}
