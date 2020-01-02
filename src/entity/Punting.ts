import { PrimaryColumn, Column, OneToOne, Entity } from "typeorm";

import { Player } from "./Player";
@Entity()
export class Punting {

@PrimaryColumn()
playerid:number;

@PrimaryColumn()
yearplayed:string;

@Column()
Avg:number;

@Column()
G:number;

@Column()
Punts:number;

@Column()
PuntsG:number;

@Column()
Split:string;

@Column()
Yards:number;

@Column()
YardsG:number;

@OneToOne(type => Player)
player:Player;
}
