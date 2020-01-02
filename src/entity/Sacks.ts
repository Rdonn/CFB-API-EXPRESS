import { PrimaryColumn, Column, OneToOne, Entity } from "typeorm";

import { Player } from "./Player";
@Entity()
export class Sacks {

@PrimaryColumn()
playerid:number;

@PrimaryColumn()
yearplayed:string;

@Column()
G:number;

@Column()
SackYards:number;

@Column()
Sacks:number;

@Column()
SacksG:number;

@Column()
Split:string;

@OneToOne(type => Player)
player:Player;
}
