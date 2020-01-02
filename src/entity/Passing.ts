import { PrimaryColumn, Column, OneToOne, Entity } from "typeorm";

import { Player } from "./Player";
@Entity()
export class Passing {

@PrimaryColumn()
playerid:number;

@PrimaryColumn()
yearplayed:string;

@Column()
Att:number;

@Column()
AttG:number;

@Column()
Comp:number;

@Column()
G:number;

@Column()
Int:number;

@Column()
Pct:number;

@Column()
Rating:number;

@Column()
Split:string;

@Column()
TD:number;

@Column()
Yards:number;

@Column()
YardsAtt:number;

@Column()
YardsG:number;

@OneToOne(type => Player)
player:Player;
}
