import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, PrimaryColumn, OneToOne, JoinColumn} from "typeorm";
import {Team} from "./Team"
import { type } from "os";
import { AllPurposeRunning } from "./All-Purpose Running";
import { FumbleReturns } from "./Fumble Returns";
import { Interceptions } from "./Interceptions";
import { KickoffReturn } from "./Kickoff Return";
import { Kickoffs } from "./Kickoffs";
import { MiscDefense } from "./Misc. Defense";
import { Passing } from "./Passing";
import { PlaceKicking } from "./Place Kicking";
import { PuntReturn } from "./Punt Return";
import { Punting } from "./Punting";
import { Receiving } from "./Receiving";
import { Rushing } from "./Rushing";
import { Sacks } from "./Sacks";
import { Scoring } from "./Scoring";
import { Tackles } from "./Tackles";
import { TacklesForLoss } from "./Tackles For Loss";
import { TotalOffense } from "./Total Offense";
import { YardsFromScrimmage } from "./Yards From Scrimmage";

@Entity()
export class Player {

    @PrimaryColumn()
    player_id: number;

    @PrimaryColumn()
    year_played: string;

    @Column({nullable: true})
    first_name: string;

    @Column({nullable: true})
    last_name: string;

    @Column({nullable: true})
    name: string;

    @Column({nullable: true})
    pos: string

    @Column({nullable: true})
    num: string

    @Column()
    year: string;

    @Column({nullable: true})
    height: string; 
    
    @Column("int", {nullable: true})
    height_inches: number; 

    @Column("int", {nullable: true})
    weight: number; 

    @Column({nullable: true})
    hometown: string; 

    @Column({nullable: true})
    last_school: string; 

    @ManyToOne(type=>Team, team=>team.players)
    team: Team;

    @OneToOne(type => AllPurposeRunning, allPurposeRunning=>allPurposeRunning.player)
    @JoinColumn()
    allPurposeRunning: AllPurposeRunning;
    
    @OneToOne(type => FumbleReturns)
    @JoinColumn()
    fumbleReturns: FumbleReturns;
    @OneToOne(type => Interceptions)
    @JoinColumn()
    interceptions: Interceptions;
    @OneToOne(type => KickoffReturn)
    @JoinColumn()
    kickoffReturn: KickoffReturn;
    @OneToOne(type => Kickoffs)
    @JoinColumn()
    kickoffs: Kickoffs;
    @OneToOne(type => MiscDefense)
    @JoinColumn()
    miscDefense: MiscDefense;
    @OneToOne(type => Passing)
    @JoinColumn()
    passing: Passing;
    @OneToOne(type => PlaceKicking)
    @JoinColumn()
    placeKicking: PlaceKicking;
    @OneToOne(type => PuntReturn)
    @JoinColumn()
    puntReturn: PuntReturn;
    @OneToOne(type => Punting)
    @JoinColumn()
    punting: Punting;
    @OneToOne(type => Receiving)
    @JoinColumn()
    receiving: Receiving;
    @OneToOne(type => Rushing)
    @JoinColumn()
    rushing: Rushing;
    @OneToOne(type => Sacks)
    @JoinColumn()
    sacks: Sacks;
    @OneToOne(type => Scoring)
    @JoinColumn()
    scoring: Scoring;
    @OneToOne(type => Tackles)
    @JoinColumn()
    tackles: Tackles;
    @OneToOne(type => TacklesForLoss)
    @JoinColumn()
    tacklesForLoss: TacklesForLoss;
    @OneToOne(type => TotalOffense)
    @JoinColumn()
    totalOffense: TotalOffense;
    @OneToOne(type => YardsFromScrimmage)
    @JoinColumn()
    yardsFromScrimmage: YardsFromScrimmage;
}


