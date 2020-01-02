import { PrimaryColumn, Column, OneToOne, Entity } from "typeorm";

import { Player } from "./Player";
@Entity()
export class Tackles {

@PrimaryColumn()
playerid:number;

@PrimaryColumn()
yearplayed:string;

@Column()
Assisted:number;

@Column()
G:number;

@Column()
Solo:number;

@Column()
Split:string;

@Column()
Total:number;

@Column()
TotalG:number;

@OneToOne(type => Player)
player:Player;
}
