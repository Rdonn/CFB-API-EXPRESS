import { PrimaryColumn, Column, OneToOne, Entity } from "typeorm";

import { Player } from "./Player";
@Entity()
export class Kickoffs {

@PrimaryColumn()
playerid:number;

@PrimaryColumn()
yearplayed:string;

@Column()
Avg:number;

@Column()
G:number;

@Column()
Kickoffs:number;

@Column()
Onside:number;

@Column()
OutOfBounds:number;

@Column()
Split:string;

@Column()
Touchback:number;

@Column()
Yards:number;

@OneToOne(type => Player)
player:Player;
}
