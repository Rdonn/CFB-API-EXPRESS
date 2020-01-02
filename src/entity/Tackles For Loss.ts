import { PrimaryColumn, Column, OneToOne, Entity } from "typeorm";

import { Player } from "./Player";
@Entity()
export class TacklesForLoss {

@PrimaryColumn()
playerid:number;

@PrimaryColumn()
yearplayed:string;

@Column()
G:number;

@Column()
Split:string;

@Column()
TFL:number;

@Column()
TFLYards:number;

@Column()
TFLG:number;

@OneToOne(type => Player)
player:Player;
}
