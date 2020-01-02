import { PrimaryColumn, Column, OneToOne, Entity } from "typeorm";

import { Player } from "./Player";
@Entity()
export class YardsFromScrimmage {

@PrimaryColumn()
playerid:number;

@PrimaryColumn()
yearplayed:string;

@Column()
G:number;

@Column()
Plays:number;

@Column()
RecvYards:number;

@Column()
RushYards:number;

@Column()
Split:string;

@Column()
TD:number;

@Column()
TotalYards:number;

@Column()
YardsG:number;

@Column()
YardsPlay:number;

@OneToOne(type => Player)
player:Player;
}
