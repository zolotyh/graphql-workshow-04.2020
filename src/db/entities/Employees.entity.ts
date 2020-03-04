import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany
} from "typeorm";
import { Territories } from "./Territories.entity";
import { Orders } from "./Orders.entity";

@Index("pk_employees", ["employeeId"], { unique: true })
@Entity("employees", { schema: "public" })
export class Employees {
  @Column("smallint", { primary: true, name: "employee_id" })
  employeeId: number;

  @Column("character varying", { name: "last_name", length: 20 })
  lastName: string;

  @Column("character varying", { name: "first_name", length: 10 })
  firstName: string;

  @Column("character varying", { name: "title", nullable: true, length: 30 })
  title: string | null;

  @Column("character varying", {
    name: "title_of_courtesy",
    nullable: true,
    length: 25
  })
  titleOfCourtesy: string | null;

  @Column("date", { name: "birth_date", nullable: true })
  birthDate: string | null;

  @Column("date", { name: "hire_date", nullable: true })
  hireDate: string | null;

  @Column("character varying", { name: "address", nullable: true, length: 60 })
  address: string | null;

  @Column("character varying", { name: "city", nullable: true, length: 15 })
  city: string | null;

  @Column("character varying", { name: "region", nullable: true, length: 15 })
  region: string | null;

  @Column("character varying", {
    name: "postal_code",
    nullable: true,
    length: 10
  })
  postalCode: string | null;

  @Column("character varying", { name: "country", nullable: true, length: 15 })
  country: string | null;

  @Column("character varying", {
    name: "home_phone",
    nullable: true,
    length: 24
  })
  homePhone: string | null;

  @Column("character varying", { name: "extension", nullable: true, length: 4 })
  extension: string | null;

  @Column("bytea", { name: "photo", nullable: true })
  photo: Buffer | null;

  @Column("text", { name: "notes", nullable: true })
  notes: string | null;

  @Column("character varying", {
    name: "photo_path",
    nullable: true,
    length: 255
  })
  photoPath: string | null;

  @ManyToMany(
    () => Territories,
    territories => territories.employees
  )
  @JoinTable({
    name: "employee_territories",
    joinColumns: [{ name: "employee_id", referencedColumnName: "employeeId" }],
    inverseJoinColumns: [
      { name: "territory_id", referencedColumnName: "territoryId" }
    ],
    schema: "public"
  })
  territories: Territories[];

  @ManyToOne(
    () => Employees,
    employees => employees.employees
  )
  @JoinColumn([{ name: "reports_to", referencedColumnName: "employeeId" }])
  reportsTo: Employees;

  @OneToMany(
    () => Employees,
    employees => employees.reportsTo
  )
  employees: Employees[];

  @OneToMany(
    () => Orders,
    orders => orders.employee
  )
  orders: Orders[];
}
