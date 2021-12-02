import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Users } from "./Users";

@Index("fk_users", ["userId"], {})
@Entity("links", { schema: "zac_cloud" })
export class Links {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "title", length: 250 })
  title: string;

  @Column("varchar", { name: "url", length: 255 })
  url: string;

  @Column("text", { name: "description" })
  description: string;

  @Column("int", { name: "user_id" })
  userId: number;

  @Column("timestamp", {
    name: "created_at",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @ManyToOne(() => Users, (users) => users.links, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: Users;
}
