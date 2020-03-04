import { Column, Entity, Index, OneToMany } from "typeorm";
import { Orders } from "./Orders";

@Index("pk_shippers", ["shipperId"], { unique: true })
@Entity("shippers", { schema: "public" })
export class Shippers {
  @Column("smallint", { primary: true, name: "shipper_id" })
  shipperId: number;

  @Column("character varying", { name: "company_name", length: 40 })
  companyName: string;

  @Column("character varying", { name: "phone", nullable: true, length: 24 })
  phone: string | null;

  @OneToMany(
    () => Orders,
    orders => orders.shipVia
  )
  orders: Orders[];
}
