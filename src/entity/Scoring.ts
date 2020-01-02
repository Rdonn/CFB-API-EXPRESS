import { PrimaryColumn, Column, OneToOne, Entity } from "typeorm";

import { Player } from "./Player";
@Entity()
export class Scoring {

@PrimaryColumn()
playerid:number;

@PrimaryColumn()
yearplayed:string;

@Column()
XP:number;

@Column()
FG:number;

@Column()
G:number;

@Column()
Points:number;

@Column()
PointsG:number;

@Column()
Safety:number;

@Column()
Split:string;

@Column()
TD:number;

@OneToOne(type => Player)
player:Player;
}
