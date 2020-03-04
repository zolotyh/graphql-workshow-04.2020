import { Column, Entity, Index, ManyToMany } from "typeorm";
import { Customers } from "./Customers";

@Index("pk_customer_demographics", ["customerTypeId"], { unique: true })
@Entity("customer_demographics", { schema: "public" })
export class CustomerDemographics {
  @Column("character", { primary: true, name: "customer_type_id" })
  customerTypeId: string;

  @Column("text", { name: "customer_desc", nullable: true })
  customerDesc: string | null;

  @ManyToMany(
    () => Customers,
    customers => customers.customerDemographics
  )
  customers: Customers[];
}
