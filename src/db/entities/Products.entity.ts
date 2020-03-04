import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany
} from "typeorm";
import { OrderDetails } from "./OrderDetails.entity";
import { Categories } from "./Categories.entity";
import { Suppliers } from "./Suppliers.entity";

@Index("pk_products", ["productId"], { unique: true })
@Entity("products", { schema: "public" })
export class Products {
  @Column("smallint", { primary: true, name: "product_id" })
  productId: number;

  @Column("character varying", { name: "product_name", length: 40 })
  productName: string;

  @Column("character varying", {
    name: "quantity_per_unit",
    nullable: true,
    length: 20
  })
  quantityPerUnit: string | null;

  @Column("real", { name: "unit_price", nullable: true, precision: 24 })
  unitPrice: number | null;

  @Column("smallint", { name: "units_in_stock", nullable: true })
  unitsInStock: number | null;

  @Column("smallint", { name: "units_on_order", nullable: true })
  unitsOnOrder: number | null;

  @Column("smallint", { name: "reorder_level", nullable: true })
  reorderLevel: number | null;

  @Column("integer", { name: "discontinued" })
  discontinued: number;

  @OneToMany(
    () => OrderDetails,
    orderDetails => orderDetails.product
  )
  orderDetails: OrderDetails[];

  @ManyToOne(
    () => Categories,
    categories => categories.products
  )
  @JoinColumn([{ name: "category_id", referencedColumnName: "categoryId" }])
  category: Categories;

  @ManyToOne(
    () => Suppliers,
    suppliers => suppliers.products
  )
  @JoinColumn([{ name: "supplier_id", referencedColumnName: "supplierId" }])
  supplier: Suppliers;
}
