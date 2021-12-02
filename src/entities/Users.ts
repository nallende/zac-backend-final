import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Links } from "./Links";

@Entity("users", { schema: "zac_cloud" })
export class Users {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "username", length: 16 })
  username: string;

  @Column("varchar", { name: "password", length: 60 })
  password: string;

  @Column("varchar", { name: "fullname", length: 100 })
  fullname: string;

  @OneToMany(() => Links, (links) => links.user)
  links: Links[];
}
