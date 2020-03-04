import { Column, Entity, Index, OneToMany } from "typeorm";
import { Products } from "./Products.entity";

@Index("pk_categories", ["categoryId"], { unique: true })
@Entity("categories", { schema: "public" })
export class Categories {
  @Column("smallint", { primary: true, name: "category_id" })
  categoryId: number;

  @Column("character varying", { name: "category_name", length: 15 })
  categoryName: string;

  @Column("text", { name: "description", nullable: true })
  description: string | null;

  @Column("bytea", { name: "picture", nullable: true })
  picture: Buffer | null;

  @OneToMany(
    () => Products,
    products => products.category
  )
  products: Products[];
}
