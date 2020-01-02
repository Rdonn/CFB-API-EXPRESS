import { PrimaryColumn, Column, OneToOne, Entity } from "typeorm";

import { Player } from "./Player";
@Entity()
export class TotalOffense {

@PrimaryColumn()
playerid:number;

@PrimaryColumn()
yearplayed:string;

@Column()
G:number;

@Column()
PassYards:number;

@Column()
Plays:number;

@Column()
RushYards:number;

@Column()
Split:string;

@Column()
TotalYards:number;

@Column()
YardsG:number;

@Column()
YardsPlay:number;

@OneToOne(type => Player)
player:Player;
}
