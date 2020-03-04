import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne
} from "typeorm";
import { Employees } from "./Employees.entity";
import { Region } from "./Region.entity";

@Index("pk_territories", ["territoryId"], { unique: true })
@Entity("territories", { schema: "public" })
export class Territories {
  @Column("character varying", {
    primary: true,
    name: "territory_id",
    length: 20
  })
  territoryId: string;

  @Column("character", { name: "territory_description" })
  territoryDescription: string;

  @ManyToMany(
    () => Employees,
    employees => employees.territories
  )
  employees: Employees[];

  @ManyToOne(
    () => Region,
    region => region.territories
  )
  @JoinColumn([{ name: "region_id", referencedColumnName: "regionId" }])
  region: Region;
}
