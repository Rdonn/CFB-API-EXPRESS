import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, PrimaryColumn} from "typeorm";
import {Team} from "./Team"
import { type } from "os";

@Entity()
export class Player {

    @PrimaryColumn()
    player_id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({nullable: true})
    name: string;

    @Column()
    year: string;

    @Column({nullable: true})
    height: string; 
    
    @Column("int")
    height_inches: number; 

    @Column("int")
    weight: number; 

    @Column({nullable: true})
    hometown: string; 

    @Column({nullable: true})
    last_school: string; 

    @ManyToOne(type=>Team, team=>team.players)
    team: Team;


}


