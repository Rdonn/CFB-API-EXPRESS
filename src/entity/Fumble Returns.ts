import { PrimaryColumn, Column, OneToOne, Entity } from "typeorm";

import { Player } from "./Player";
@Entity()
export class FumbleReturns {

@PrimaryColumn()
playerid:number;

@PrimaryColumn()
yearplayed:number;

@Column()
FumRet:number;

@Column()
G:number;

@Column()
Split:string;

@Column()
TD:number;

@Column()
Yards:number;

@OneToOne(type => Player)
player:Player;
}
