import { PrimaryColumn, Column, OneToOne, Entity } from "typeorm";

import { Player } from "./Player";
@Entity()
export class Interceptions {

@PrimaryColumn()
playerid:number;

@PrimaryColumn()
yearplayed:string;

@Column()
G:number;

@Column()
Int:number;

@Column()
IntG:number;

@Column()
Split:string;

@Column()
TD:number;

@Column()
Yards:number;

@OneToOne(type => Player)
player:Player;
}
