import { PrimaryColumn, Column, OneToOne, Entity } from "typeorm";

import { Player } from "./Player";
@Entity()
export class PlaceKicking {

@PrimaryColumn()
playerid:number;

@PrimaryColumn()
yearplayed:string;

@Column()
Att:number;

@Column()
AttG:number;

@Column()
ExtraPoint:number;

@Column()
FieldGoal:number;

@Column()
G:number;

@Column()
Made:number;

@Column()
MadeG:number;

@Column()
Pct:number;

@Column()
Split:string;

@OneToOne(type => Player)
player:Player;
}
