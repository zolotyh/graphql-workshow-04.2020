import { Column, Entity, Index, OneToMany } from "typeorm";
import { Territories } from "./Territories";

@Index("pk_region", ["regionId"], { unique: true })
@Entity("region", { schema: "public" })
export class Region {
  @Column("smallint", { primary: true, name: "region_id" })
  regionId: number;

  @Column("character", { name: "region_description" })
  regionDescription: string;

  @OneToMany(
    () => Territories,
    territories => territories.region
  )
  territories: Territories[];
}
