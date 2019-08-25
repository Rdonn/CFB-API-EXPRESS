import { PrimaryGeneratedColumn, Entity, Column, OneToMany, PrimaryColumn, ManyToOne } from "typeorm";
import { Player } from "./Player";
import { type } from "os";
import { Conference } from "./Conference";

@Entity()
export class Team{
    @PrimaryColumn()
    team_id: number; 

    @PrimaryColumn()
    year:string; 

    @Column()
    name: string; 
    
    @OneToMany(type=>Player, players=>players.team)
    players: Player;

    @ManyToOne(type=>Conference, conferece=>conferece.teams)
    conference: Conference;
}