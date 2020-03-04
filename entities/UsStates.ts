import { Column, Entity, Index } from "typeorm";

@Index("pk_usstates", ["stateId"], { unique: true })
@Entity("us_states", { schema: "public" })
export class UsStates {
  @Column("smallint", { primary: true, name: "state_id" })
  stateId: number;

  @Column("character varying", {
    name: "state_name",
    nullable: true,
    length: 100
  })
  stateName: string | null;

  @Column("character varying", {
    name: "state_abbr",
    nullable: true,
    length: 2
  })
  stateAbbr: string | null;

  @Column("character varying", {
    name: "state_region",
    nullable: true,
    length: 50
  })
  stateRegion: string | null;
}
