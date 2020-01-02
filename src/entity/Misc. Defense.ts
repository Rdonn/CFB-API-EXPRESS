import { PrimaryColumn, Column, OneToOne, Entity } from "typeorm";

import { Player } from "./Player";
@Entity()
export class MiscDefense {

@PrimaryColumn()
playerid:number;

@PrimaryColumn()
yearplayed:string;

@Column()
FumblesForced:number;

@Column()
G:number;

@Column()
KicksPuntsBlocked:number;

@Column()
PassesBrokenUp:number;

@Column()
QBHurries:number;

@Column()
Split:string;

@OneToOne(type => Player)
player:Player;
}
