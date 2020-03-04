import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany
} from "typeorm";
import { OrderDetails } from "./OrderDetails";
import { Customers } from "./Customers";
import { Employees } from "./Employees";
import { Shippers } from "./Shippers";

@Index("pk_orders", ["orderId"], { unique: true })
@Entity("orders", { schema: "public" })
export class Orders {
  @Column("smallint", { primary: true, name: "order_id" })
  orderId: number;

  @Column("date", { name: "order_date", nullable: true })
  orderDate: string | null;

  @Column("date", { name: "required_date", nullable: true })
  requiredDate: string | null;

  @Column("date", { name: "shipped_date", nullable: true })
  shippedDate: string | null;

  @Column("real", { name: "freight", nullable: true, precision: 24 })
  freight: number | null;

  @Column("character varying", {
    name: "ship_name",
    nullable: true,
    length: 40
  })
  shipName: string | null;

  @Column("character varying", {
    name: "ship_address",
    nullable: true,
    length: 60
  })
  shipAddress: string | null;

  @Column("character varying", {
    name: "ship_city",
    nullable: true,
    length: 15
  })
  shipCity: string | null;

  @Column("character varying", {
    name: "ship_region",
    nullable: true,
    length: 15
  })
  shipRegion: string | null;

  @Column("character varying", {
    name: "ship_postal_code",
    nullable: true,
    length: 10
  })
  shipPostalCode: string | null;

  @Column("character varying", {
    name: "ship_country",
    nullable: true,
    length: 15
  })
  shipCountry: string | null;

  @OneToMany(
    () => OrderDetails,
    orderDetails => orderDetails.order
  )
  orderDetails: OrderDetails[];

  @ManyToOne(
    () => Customers,
    customers => customers.orders
  )
  @JoinColumn([{ name: "customer_id", referencedColumnName: "customerId" }])
  customer: Customers;

  @ManyToOne(
    () => Employees,
    employees => employees.orders
  )
  @JoinColumn([{ name: "employee_id", referencedColumnName: "employeeId" }])
  employee: Employees;

  @ManyToOne(
    () => Shippers,
    shippers => shippers.orders
  )
  @JoinColumn([{ name: "ship_via", referencedColumnName: "shipperId" }])
  shipVia: Shippers;
}
