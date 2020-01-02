import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, PrimaryColumn, OneToMany} from "typeorm";
import {Team} from "./Team"
import { type } from "os";

@Entity()
export class Conference{
    @PrimaryColumn()
    name: string; 
    @PrimaryColumn()
    year: string; 

    @OneToMany(type=>Team, team=>team.conference)
    teams: Team[]; 

}