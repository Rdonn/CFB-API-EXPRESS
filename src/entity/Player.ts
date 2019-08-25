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

    @Column()
    name: string;

    @Column()
    year: string;

    @Column()
    height: string; 
    
    @Column("int")
    height_inches: number; 

    @Column("int")
    weight: number; 

    @Column()
    hometown: string; 

    @Column()
    last_school: string; 

    @ManyToOne(type=>Team, team=>team.players)
    team: Team;


}


