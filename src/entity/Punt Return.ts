import { PrimaryColumn, Column, OneToOne, Entity } from "typeorm";

import { Player } from "./Player";
@Entity()
export class PuntReturn {

@PrimaryColumn()
playerid:number;

@PrimaryColumn()
yearplayed:string;

@Column()
Avg:number;

@Column()
G:number;

@Column()
Ret:number;

@Column()
RetG:number;

@Column()
Split:string;

@Column()
TD:number;

@Column()
Yards:number;

@Column()
YardsG:number;

@OneToOne(type => Player)
player:Player;
}
