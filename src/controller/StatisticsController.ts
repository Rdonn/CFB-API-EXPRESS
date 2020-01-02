import { Controller, Route, Tags, Put, BodyProp } from "tsoa";
import { Player } from "../entity/Player";
import { getRepository, FileLogger } from "typeorm";
import { FumbleReturns } from "../entity/Fumble Returns";
import { AllPurposeRunning } from "../entity/All-Purpose Running";
import { Interceptions } from "../entity/Interceptions";
import { KickoffReturn } from "../entity/Kickoff Return";
import { Kickoffs } from "../entity/Kickoffs";
import { MiscDefense } from "../entity/Misc. Defense";
import { Passing } from "../entity/Passing";
import { PlaceKicking } from "../entity/Place Kicking";
import { PuntReturn } from "../entity/Punt Return";
import { Punting } from "../entity/Punting";
import { Receiving } from "../entity/Receiving";
import { Rushing } from "../entity/Rushing";
import { Sacks } from "../entity/Sacks";
import { Scoring } from "../entity/Scoring";
import { TacklesForLoss } from "../entity/Tackles For Loss";
import { Tackles } from "../entity/Tackles";
import { YardsFromScrimmage } from "../entity/Yards From Scrimmage";
import { TotalOffense } from "../entity/Total Offense";

@Route("statistics")
@Tags("Statistics")
export class StatisticsController extends Controller{
    private playerRepo = getRepository(Player);
    private fumbleReturnsRepo = getRepository(FumbleReturns);
    private allPurposeRunningRepo = getRepository(AllPurposeRunning);
    private interceptionRepo = getRepository(Interceptions); 
    private kickoffReturnsRepo = getRepository(KickoffReturn); 
    private kickoffRepo = getRepository(Kickoffs); 
    private miscDefenseRepo = getRepository(MiscDefense);
    private passRepo = getRepository(Passing);  
    private placeKickingRepo = getRepository(PlaceKicking);
    private puntReturnRepo = getRepository(PuntReturn); 
    private puntingRepo = getRepository(Punting); 
    private ReceivingRepo = getRepository(Receiving);
    private rushingRepo = getRepository(Rushing); 
    private sackRepo = getRepository(Sacks); 
    private scoringRepo = getRepository(Scoring); 
    private tacklesForLossRepo = getRepository(TacklesForLoss); 
    private tacklesRepo = getRepository(Tackles);
    private yardsFromScrimmageRepo = getRepository(YardsFromScrimmage); 
    private totalOffenseRepo = getRepository(TotalOffense);  
    @Put("/allPurposeRunning")
    addAllPurposeRunning(


        @BodyProp()
        playerid:number,
        
        @BodyProp()
        yearplayed:string,
        
        @BodyProp()
        G:number,
        
        @BodyProp()
        IntRet:number,
        
        @BodyProp()
        KickRet:number,
        
        @BodyProp()
        Plays:number,
        
        @BodyProp()
        PuntRet:number,
        
        @BodyProp()
        Recv:number,
        
        @BodyProp()
        Rush:number,
        
        @BodyProp()
        Split:string,
        
        @BodyProp()
        TotalYards:number,
        
        @BodyProp()
        YardsG:number,
        
        @BodyProp()
        YardsPlay:number,){
            this.playerRepo.findOne({year_played:yearplayed, player_id:playerid}).then(result=>{
                var allPurposeRunning: AllPurposeRunning = {
                    yearplayed: yearplayed, 
                    playerid: playerid, 
                    G:G, 
                    IntRet: IntRet, 
                    KickRet: KickRet, 
                    Plays: Plays, 
                    PuntRet: PuntRet, 
                    Recv: Recv, 
                    Rush: Rush, 
                    Split: Split, 
                    TotalYards: TotalYards, 
                    YardsG: YardsG, 
                    YardsPlay: YardsPlay, 
                    player:result

                }

                this.allPurposeRunningRepo.insert(allPurposeRunning).then(_=>{
                    result.allPurposeRunning = allPurposeRunning; 
                    this.playerRepo.save(result); 
                }); 
                
            })
    }

    @Put("/fumbleReturns")
    addFumbleReturns(
        @BodyProp()
        playerid:number,
        
        @BodyProp()
        yearplayed:number,
        
        @BodyProp()
        FumRet:number,
        
        @BodyProp()
        G:number,
        
        @BodyProp()
        Split:string,
        
        @BodyProp()
        TD:number,
        
        @BodyProp()
        Yards:number,){
            this.playerRepo.findOne({player_id: playerid, year_played:String(yearplayed)}).then(result=>{
                console.log(result);
                var fumbleReturns = {player:result, playerid:playerid, yearplayed:yearplayed, FumRet:FumRet, G:G, Split:Split, TD:TD, Yards:Yards} as FumbleReturns;
                this.fumbleReturnsRepo.insert(fumbleReturns)
                .then(_=>{
                    result.fumbleReturns = fumbleReturns;
                this.playerRepo.save(result); 
                }); 
                
                
            })


    }

    @Put("/interceptions")
    addInterception(
        @BodyProp()
        playerid:number,
        
        @BodyProp()
        yearplayed:string,
        
        @BodyProp()
        G:number,
        
        @BodyProp()
        Int:number,
        
        @BodyProp()
        IntG:number,
        
        @BodyProp()
        Split:string,
        
        @BodyProp()
        TD:number,
        
        @BodyProp()
        Yards:number){
            this.playerRepo.findOne({player_id:playerid, year_played:yearplayed}).then(result=>{
                var interceptions: Interceptions = {
                    playerid: playerid, 
                    yearplayed: yearplayed, 
                    G:G, 
                    Int: Int, 
                    IntG: IntG, 
                    Split: Split, 
                    TD: TD, 
                    Yards: Yards,
                    player: result
                }
                this.interceptionRepo.insert(interceptions)
                .then(_=>{
                    result.interceptions = interceptions; 
                    this.playerRepo.save(result); 
            
                    }); 
                })

    }

    @Put("/kickoffReturn")
    addKickoffReturns(
        @BodyProp()
        playerid:number,
        
        @BodyProp()
        yearplayed:string,
        
        @BodyProp()
        Avg:number,
        
        @BodyProp()
        G:number,
        
        @BodyProp()
        Ret:number,
        
        @BodyProp()
        RetG:number,
        
        @BodyProp()
        Split:string,
        
        @BodyProp()
        TD:number,
        
        @BodyProp()
        Yards:number,
        
        @BodyProp()
        YardsG:number,
        ){
            this.playerRepo.findOne({player_id: playerid, year_played: yearplayed}).then(result=>{
                var kickoffReturns: KickoffReturn = {
                    playerid: playerid, 
                    yearplayed: yearplayed, 
                    Avg: Avg, 
                    G:G, 
                    Ret:Ret, 
                    RetG: RetG, 
                    Split: Split, 
                    TD: TD, 
                    Yards: Yards, 
                    YardsG: YardsG, 
                    player: result
                }
                 
                this.kickoffReturnsRepo.insert(kickoffReturns)
                .then(_=>{
                    result.kickoffReturn = kickoffReturns;
                    this.playerRepo.save(result); 
                }); 
                
            })
    }

    @Put("/kickoffs")
    addKickoffStats(
        @BodyProp()
        playerid:number,
        
        @BodyProp()
        yearplayed:string,
        
        @BodyProp()
        Avg:number,
        
        @BodyProp()
        G:number,
        
        @BodyProp()
        Kickoffs:number,
        
        @BodyProp()
        Onside:number,
        
        @BodyProp()
        OutOfBounds:number,
        
        @BodyProp()
        Split:string,
        
        @BodyProp()
        Touchback:number,
        
        @BodyProp()
        Yards:number,){
            this.playerRepo.findOne({player_id: playerid, year_played: yearplayed}).then(result=>{
                var kickoffs: Kickoffs = {
                    player: result, 
                    playerid: playerid, 
                    yearplayed: yearplayed, 
                    Avg:Avg, 
                    G:G, 
                    Kickoffs: Kickoffs, 
                    Onside: Onside, 
                    OutOfBounds: OutOfBounds, 
                    Split: Split, 
                    Touchback: Touchback, 
                    Yards: Yards
                }
                
                this.kickoffRepo.insert(kickoffs)
                .then(_=>{
                    result.kickoffs = kickoffs;
                    this.playerRepo.save(result);  
                }); 
                

            })

    }

    @Put("/miscDefense")
    addMistDefense(

        @BodyProp()
        playerid: number,

        @BodyProp()
        yearplayed: string,

        @BodyProp()
        FumblesForced: number,//

        @BodyProp()
        G: number,//

        @BodyProp()
        KicksPuntsBlocked: number,//

        @BodyProp()
        PassesBrokenUp: number,//

        @BodyProp()
        QBHurries: number,//

        @BodyProp()
        Split: string,

    ) {
        this.playerRepo.findOne({player_id: playerid, year_played: yearplayed}).then(result=>{
            var miscDefense: MiscDefense = {
                player:result, 
                playerid: playerid, 
                yearplayed: yearplayed, 
                FumblesForced: FumblesForced, 
                G:G, 
                KicksPuntsBlocked: KicksPuntsBlocked, 
                PassesBrokenUp: PassesBrokenUp, 
                QBHurries: QBHurries, 
                Split: Split
            }; 
            this.miscDefenseRepo.insert(miscDefense).then(_=>{
                result.miscDefense = miscDefense; 
                this.playerRepo.save(result); 
            })
        })
    }

    @Put("/passing")
    addPassing(
        @BodyProp()
        playerid:number,
        
        @BodyProp()
        yearplayed:string,
        
        @BodyProp()
        Att:number,
        
        @BodyProp()
        AttG:number,
        
        @BodyProp()
        Comp:number,
        
        @BodyProp()
        G:number,
        
        @BodyProp()
        Int:number,
        
        @BodyProp()
        Pct:number,
        
        @BodyProp()
        Rating:number,
        
        @BodyProp()
        Split:string,
        
        @BodyProp()
        TD:number,
        
        @BodyProp()
        Yards:number,
        
        @BodyProp()
        YardsAtt:number,
        
        @BodyProp()
        YardsG:number,
        ){
            this.playerRepo.findOne({player_id: playerid, year_played: yearplayed}).then(result=>{
                var passing: Passing = {
                    player: result, 
                    playerid: playerid, 
                    yearplayed: yearplayed, 
                    Att: Att, 
                    AttG: AttG, 
                    Comp: Comp, 
                    G:G, 
                    Int: Int, 
                    Pct: Pct, 
                    Rating: Rating ,
                    Split: Split, 
                    TD: TD, 
                    Yards: Yards, 
                    YardsAtt: YardsAtt, 
                    YardsG: YardsG
                };
                this.passRepo.insert(passing).then(_=>{
                    result.passing = passing; 
                    this.playerRepo.save(result); 
                }) 
            })

    }

    @Put("/placeKicking")
    addPlaceKicking(
        @BodyProp()
        playerid:number,
        
        @BodyProp()
        yearplayed:string,
        
        @BodyProp()
        Att:number,
        
        @BodyProp()
        AttG:number,
        
        @BodyProp()
        ExtraPoint:number,
        
        @BodyProp()
        FieldGoal:number,
        
        @BodyProp()
        G:number,
        
        @BodyProp()
        Made:number,
        
        @BodyProp()
        MadeG:number,
        
        @BodyProp()
        Pct:number,
        
        @BodyProp()
        Split:string,
        ){
            this.playerRepo.findOne({player_id:playerid, year_played:yearplayed}).then(result=>{
                var placeKicking:PlaceKicking={
                    playerid: playerid, 
                    yearplayed:yearplayed, 
                    Att:Att, 
                    AttG: AttG, 
                    ExtraPoint: ExtraPoint, 
                    FieldGoal: FieldGoal, 
                    G:G, 
                    Made: Made, 
                    MadeG: MadeG,
                    Pct: Pct, 
                    Split: Split, 
                    player: result
                }
                this.placeKickingRepo.insert(placeKicking).then(_=>{
                    result.placeKicking = placeKicking; 
                    this.playerRepo.save(result); 
                })
            })
    }

    @Put("/puntReturn")
    addPuntReturns(
        @BodyProp()
        playerid:number,
        
        @BodyProp()
        yearplayed:string,
        
        @BodyProp()
        Avg:number,
        
        @BodyProp()
        G:number,
        
        @BodyProp()
        Ret:number,
        
        @BodyProp()
        RetG:number,
        
        @BodyProp()
        Split:string,
        
        @BodyProp()
        TD:number,
        
        @BodyProp()
        Yards:number,
        
        @BodyProp()
        YardsG:number,
        ){
            this.playerRepo.findOne({player_id: playerid, year_played:yearplayed}).then(result=>{
                var puntReturns: PuntReturn = {
                    player: result, 
                    yearplayed: yearplayed,
                    playerid: playerid, 
                    Avg: Avg, 
                    G:G, 
                    Ret: Ret, 
                    RetG: RetG, 
                    Split: Split, 
                    TD: TD , 
                    Yards: Yards, 
                    YardsG: YardsG 
                }
                this.puntReturnRepo.insert(puntReturns).then(_=>{
                    result.puntReturn = puntReturns; 
                    this.playerRepo.save(result); 
                })
            })
    }

    @Put("/punting")
    addPunting(
        @BodyProp()
        playerid:number,
        
        @BodyProp()
        yearplayed:string,
        
        @BodyProp()
        Avg:number,
        
        @BodyProp()
        G:number,
        
        @BodyProp()
        Punts:number,
        
        @BodyProp()
        PuntsG:number,
        
        @BodyProp()
        Split:string,
        
        @BodyProp()
        Yards:number,
        
        @BodyProp()
        YardsG:number,
        ){
            this.playerRepo.findOne({player_id:playerid, year_played:yearplayed}).then(result=>{
                var punting: Punting = {
                    player: result, 
                    playerid: playerid, 
                    yearplayed: yearplayed, 
                    Avg: Avg, 
                    G:G, 
                    Punts: Punts, 
                    PuntsG: PuntsG, 
                    Split: Split, 
                    Yards: Yards, 
                    YardsG: YardsG
                }
                this.puntingRepo.insert(punting).then(_=>{
                    result.punting = punting; 
                    this.playerRepo.save(result); 
                })
            })
    }

    @Put("/receiving")
    addReceiving(
        @BodyProp()
        playerid:number,
        
        @BodyProp()
        yearplayed:string,
        
        @BodyProp()
        Avg:number,
        
        @BodyProp()
        G:number,
        
        @BodyProp()
        Rec:number,
        
        @BodyProp()
        RecG:number,
        
        @BodyProp()
        Split:string,
        
        @BodyProp()
        TD:number,
        
        @BodyProp()
        Yards:number,
        
        @BodyProp()
        YardsG:number,
        ){
            this.playerRepo.findOne({player_id:playerid, year_played: yearplayed}).then(result=>{
                var receiving: Receiving = {
                    player: result, 
                    playerid: playerid, 
                    yearplayed: yearplayed, 
                    Avg: Avg, 
                    G:G, 
                    Rec: Rec, 
                    RecG: RecG, 
                    Split: Split, 
                    TD: TD, 
                    Yards: Yards, 
                    YardsG: YardsG
                }
                this.ReceivingRepo.insert(receiving).then(_=>{
                    result.receiving = receiving; 
                    this.playerRepo.save(result); 
                })
            })
    }

    @Put("/rushing")
    addRushing(
        @BodyProp()
        playerid:number,
        
        @BodyProp()
        yearplayed:string,
        
        @BodyProp()
        Att:number,
        
        @BodyProp()
        AttG:number,
        
        @BodyProp()
        Avg:number,
        
        @BodyProp()
        G:number,
        
        @BodyProp()
        Split:string,
        
        @BodyProp()
        TD:number,
        
        @BodyProp()
        Yards:number,
        
        @BodyProp()
        YardsG:number,
        ){
            this.playerRepo.findOne({player_id:playerid, year_played: yearplayed}).then(result=>{
                var rushing: Rushing = {
                    player: result, 
                    playerid: playerid, 
                    yearplayed: yearplayed, 
                    Att: Att, 
                    AttG: AttG, 
                    Avg: Avg, 
                    G:G, 
                    Split: Split, 
                    TD: TD, 
                    Yards: Yards, 
                    YardsG: YardsG

                }
                this.rushingRepo.insert(rushing).then(_=>{
                    result.rushing = rushing; 
                    this.playerRepo.save(result); 
                })
            })
    }

    @Put("/sacks")
    addSacks(
        @BodyProp()
        playerid:number,
        
        @BodyProp()
        yearplayed:string,
        
        @BodyProp()
        G:number,
        
        @BodyProp()
        SackYards:number,
        
        @BodyProp()
        Sacks:number,
        
        @BodyProp()
        SacksG:number,
        
        @BodyProp()
        Split:string,
        ){
            this.playerRepo.findOne({player_id: playerid, year_played:yearplayed}).then(result=>{
                var sacks: Sacks = {
                    player: result, 
                    playerid: playerid, 
                    yearplayed: yearplayed, 
                    G:G, 
                    SackYards: SackYards, 
                    Sacks: Sacks, 
                    SacksG: SacksG, 
                    Split: Split
                }; 
                this.sackRepo.insert(sacks).then(_=>{
                    result.sacks = sacks; 
                    this.playerRepo.save(result); 
                })
            })

    }

    @Put("/scoring")
    addScoring(
        @BodyProp()
        playerid:number,
        
        @BodyProp()
        yearplayed:string,
        
        @BodyProp()
        XP:number,
        
        @BodyProp()
        FG:number,
        
        @BodyProp()
        G:number,
        
        @BodyProp()
        Points:number,
        
        @BodyProp()
        PointsG:number,
        
        @BodyProp()
        Safety:number,
        
        @BodyProp()
        Split:string,
        
        @BodyProp()
        TD:number,
        ){
            this.playerRepo.findOne({player_id: playerid, year_played:yearplayed}).then(result=>{
                var scoring: Scoring = {
                    player: result,
                    yearplayed: yearplayed,
                    playerid: playerid, 
                    XP: XP, 
                    FG: FG, 
                    G: G, 
                    Points: Points, 
                    PointsG: PointsG, 
                    Safety: Safety, 
                    Split: Split, 
                    TD: TD 

                }
                this.scoringRepo.insert(scoring).then(_=>{
                    result.scoring = scoring; 
                    this.playerRepo.save(result); 
                })
            })
    }

    @Put("/tacklesForLoss")
    addTacklesForLoss(
        @BodyProp()
        playerid:number,
        
        @BodyProp()
        yearplayed:string,
        
        @BodyProp()
        G:number,
        
        @BodyProp()
        Split:string,
        
        @BodyProp()
        TFL:number,
        
        @BodyProp()
        TFLYards:number,
        
        @BodyProp()
        TFLG:number,){
            this.playerRepo.findOne({player_id: playerid, year_played: yearplayed}).then(result=>{
                var tacklesForLoss: TacklesForLoss = {
                    player: result, 
                    playerid: playerid, 
                    yearplayed: yearplayed, 
                    G:G, 
                    Split: Split, 
                    TFL: TFL, 
                    TFLYards: TFLYards, 
                    TFLG: TFLG
                }
                this.tacklesForLossRepo.insert(tacklesForLoss).then(_=>{
                    result.tacklesForLoss = tacklesForLoss; 
                    this.playerRepo.save(result); 
                })
            })
        
    }

    @Put("/tackles")
    addTackles(

        
        @BodyProp()
        playerid:number,
        
        @BodyProp()
        yearplayed:string,
        
        @BodyProp()
        Assisted:number,
        
        @BodyProp()
        G:number,
        
        @BodyProp()
        Solo:number,
        
        @BodyProp()
        Split:string,
        
        @BodyProp()
        Total:number,
        
        @BodyProp()
        TotalG:number,
        ){
            console.log("hit");
            
            this.playerRepo.findOne({player_id:playerid, year_played:yearplayed}).then(result=>{
                var tackles: Tackles= {
                    player: result, 
                    playerid: playerid, 
                    yearplayed: yearplayed, 
                    Assisted: Assisted, 
                    G:G, 
                    Solo: Solo, 
                    Split: Split, 
                    Total: Total, 
                    TotalG: TotalG
                }
                this.tacklesRepo.insert(tackles).then(_=>{
                    result.tackles = tackles; 
                    this.playerRepo.save(result); 
                })
            })
    }

    @Put("/totalOffense")
    addTotalOffense(
        @BodyProp()
        playerid:number,
        
        @BodyProp()
        yearplayed:string,
        
        @BodyProp()
        G:number,
        
        @BodyProp()
        PassYards:number,
        
        @BodyProp()
        Plays:number,
        
        @BodyProp()
        RushYards:number,
        
        @BodyProp()
        Split:string,
        
        @BodyProp()
        TotalYards:number,
        
        @BodyProp()
        YardsG:number,
        
        @BodyProp()
        YardsPlay:number,
        ){
            this.playerRepo.findOne({player_id:playerid, year_played:yearplayed}).then(result=>{
                var totalOffense: TotalOffense= {
                    player: result, 
                    playerid: playerid, 
                    yearplayed: yearplayed, 
                    G:G, 
                    Split: Split,
                    PassYards:PassYards, 
                    Plays:Plays, 
                    RushYards: RushYards, 
                    TotalYards: TotalYards, 
                    YardsG: YardsG, 
                    YardsPlay: YardsPlay
                }
                this.totalOffenseRepo.insert(totalOffense).then(_=>{
                    result.totalOffense = totalOffense; 
                    this.playerRepo.save(result); 
                })
            })
    
    }

    @Put("/yardsFromScrimmage")
    addYardsFromScrimmage(
        @BodyProp()
        playerid:number,
        
        @BodyProp()
        yearplayed:string,
        
        @BodyProp()
        G:number,
        
        @BodyProp()
        Plays:number,
        
        @BodyProp()
        RecvYards:number,
        
        @BodyProp()
        RushYards:number,
        
        @BodyProp()
        Split:string,
        
        @BodyProp()
        TD:number,
        
        @BodyProp()
        TotalYards:number,
        
        @BodyProp()
        YardsG:number,
        
        @BodyProp()
        YardsPlay:number,
        ){
            this.playerRepo.findOne({player_id:playerid, year_played:yearplayed}).then(result=>{
                var YFSCRIM: YardsFromScrimmage= {
                    player: result, 
                    playerid: playerid, 
                    yearplayed: yearplayed, 
                    Plays: Plays,
                    G:G, 
                    RecvYards: RecvYards, 
                    Split: Split, 
                    RushYards: RushYards, 
                    TD: TD, 
                    TotalYards: TotalYards, 
                    YardsG: YardsG,
                    YardsPlay: YardsPlay 

                }
                this.yardsFromScrimmageRepo.insert(YFSCRIM).then(_=>{
                    result.yardsFromScrimmage = YFSCRIM; 
                    this.playerRepo.save(result); 
                })
            })
    
    }

}