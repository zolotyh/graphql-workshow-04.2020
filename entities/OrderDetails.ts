import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Orders } from "./Orders";
import { Products } from "./Products";

@Index("pk_order_details", ["orderId", "productId"], { unique: true })
@Entity("order_details", { schema: "public" })
export class OrderDetails {
  @Column("smallint", { primary: true, name: "order_id" })
  orderId: number;

  @Column("smallint", { primary: true, name: "product_id" })
  productId: number;

  @Column("real", { name: "unit_price", precision: 24 })
  unitPrice: number;

  @Column("smallint", { name: "quantity" })
  quantity: number;

  @Column("real", { name: "discount", precision: 24 })
  discount: number;

  @ManyToOne(
    () => Orders,
    orders => orders.orderDetails
  )
  @JoinColumn([{ name: "order_id", referencedColumnName: "orderId" }])
  order: Orders;

  @ManyToOne(
    () => Products,
    products => products.orderDetails
  )
  @JoinColumn([{ name: "product_id", referencedColumnName: "productId" }])
  product: Products;
}
