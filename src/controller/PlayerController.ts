import {getRepository, SimpleConsoleLogger, getConnection} from "typeorm";
import {NextFunction, Response} from "express";
import {Player} from "../entity/Player";
import { paginateAndApplyFilters } from "../utils/paginationAndFilterBuilder";
import { QueryErrorFormatter } from "../utils/queryErrorFormatter";
import { SuccessResponse, Get, Route, Tags, BodyProp, Put, Request, Query, Controller, Post, Body } from "tsoa";
import { Team } from "../entity/Team";
import * as express from 'express';
import { isUndefined } from "util";
import { Conference } from "../entity/Conference";
import { QueryExpressionMap } from "typeorm/query-builder/QueryExpressionMap";
import { Representation } from "./models/statRepresentation";

@Route('players')
@Tags('Players')
export class PlayerController extends Controller{
    

    private playerRepo = getRepository(Player);
    private teamRepo  = getRepository(Team);
    private logger: SimpleConsoleLogger = new SimpleConsoleLogger();
    private playerCategories = {
        allPurposeRunning: 'allPurposeRunning',
        fumbleReturns: 'fumbleReturns',
        interceptions: 'interceptions',
        kickoffReturn: 'kickoffReturn',
        kickoffs: 'kickoffs',
        miscDefense: 'miscDefense',
        passing: 'passing',
        placeKicking: 'placeKicking',
        puntReturn: 'puntReturn',
        punting: 'punting',
        receiving: 'receiving',
        rushing: 'rushing',
        sacks: 'sacks',
        scoring: 'scoring',
        tackles: 'tackles',
        tacklesForLoss: 'tacklesForLoss',
        totalOffense: 'totalOffense',
        yardsFromScrimmage: 'yardsFromScrimmage'
    };
    

    @Get("/conference")
    async getPlayersByConference(
    @Request() request: express.Request,
    @Query('conference') conference: string, 
    @Query('conference_year') conference_year: string,
    @Query('filter') filter?: string,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
    @Query('sort') sort?: string
    ){
        var query = this.playerRepo.createQueryBuilder('player'); 
        query.select(['player']); 

        if(isUndefined(limit) || Number(limit) > 500){
            limit = '500';
        }
        if(isUndefined(offset)){
            offset = '0'; 
        }

        query.innerJoin("player.team", "team"); 
        query.innerJoin("team.conference", "conference"); 

        query.limit(Number(limit)); 
        query.offset(Number(offset)); 

        query.where("conference.name = :conference_name", {conference_name:conference}); 

        if(!isUndefined(conference_year)){
            query.where("conference.year=:year", {year:conference_year}); 
        }

        query.addSelect(['team.name', 'conference.name', 'conference.year']); 

        return query.getMany(); 

    }
    
    @SuccessResponse('201', 'retrieved')
    @Get("/team")
    async getPlayers(
    @Request() request: express.Request,
    @Query('school') school:string, 
    @Query('year') school_year?:string,
    @Query('filter') filter?: string,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
    @Query('sort') sort?: string
    ){
        //set the limit to 500
        console.log(filter, limit, offset, sort, school);
        
        if(isUndefined(limit) || Number(limit) > 500){
            limit = '500';
        }
        if(isUndefined(offset)){
            offset = '0'; 
        }
        if(isUndefined(school)){
            console.log("undefined school");
        }
        
        var query = this.playerRepo.createQueryBuilder('player').offset(Number(offset)).limit(Number(limit));
        query.select(['player']);
        if(!isUndefined(school)){
            query.addSelect(['team.name']);
            query.innerJoin("player.team", "team");
            query.where("team.name = :name", {name:school});
            if(!isUndefined(school_year)){
                query.addSelect(['team.year']);
                query.andWhere("team.year = :year", {year:school_year});
            }  
        }
        else if(!isUndefined(school_year)){
            query.addSelect(['team.year'])
            query.innerJoin("player.team", "team");
            query.where("team.year = :year", {year:school_year});
        }
        
        this.setHeader("count", String(await query.getCount()))
        return query.getMany()
    
        
        
    }

    @Get("/stats/{category}")
    async getListOfPlayerStats(category: string,
        @Query('filter') filter?: string,
        @Query('limit') limit?: number,
        @Query('offset') offset?: number,
        @Query('sort') sort?: string
    ) {

        if (isUndefined(offset) || offset < 0){
            offset = 0; 
        }
        if(isUndefined(limit) || limit > 500){
            limit = 500; 
        }

        
        
        var query =  this.playerRepo.createQueryBuilder('player')
        .limit(limit)
        .skip(offset)
        .innerJoinAndSelect(`player.${category}`, category)
        
        if (!isUndefined(sort)){
            //unfortunately... we need to create a quick set
            var set:Set<string> = new Set<string>(); 
            console.log(getConnection().getMetadata(category).ownColumns.forEach(column_meta=>{
                console.log(column_meta.databaseName);
                set.add(column_meta.databaseName.toLowerCase()); 
            }));
            if(set.has(sort.toLowerCase())){
                query.orderBy(sort,'ASC'); 
            }
        }

        return query.getMany(); 

     }

    @Get("/stats/{player_id}/{player_year}/{category}")
    async getCategoryByString(player_id: number, player_year: string, category: string){
        if (!Object.keys(this.playerCategories).includes(category)){
            this.setStatus(400); 
            throw "Erro. Not a category"
            
        }   
        return this.playerRepo.createQueryBuilder('player')
        .where('player.player_id=:id', {id: player_id})
        .andWhere('player.year_played=:year', {year: player_year})
        .innerJoinAndSelect(`player.${category}`, category)
        .getOne();


        


    }

    /**
     * get the categories the player is represented in, statistically 
    */
    @Get("/stats/representation/{player_id}/{player_year}")
    async representation(player_id:number, player_year:string){
        var query = this.playerRepo.createQueryBuilder('player')
        .where('player_id = :id', {id:player_id})
        .andWhere('year_played=:year', {year: player_year})
        //query.innerJoinAndSelect(`player.${this.playerCategories[0]}`, this.playerCategories[0])
        Object.keys(this.playerCategories).forEach(value=>{
            query.leftJoinAndSelect(`player.${value}`, value)

        })
        
        var result = await query.getOne();
        var temp_obj: any = {};
        for(const key in result){
            if (Object.keys(this.playerCategories).includes(key)){
                temp_obj[key] = !(result[key] == null); 
                
            }
            
        }
        
        return temp_obj;
        
    }

    //messed up, adding an endpoint to update player objects to include pos and num
    @Post("/{team_year}/{team_name}")
    async updatePlayerToIncludePosAndNum(
        team_year: string, 
        team_name: String,
        @BodyProp()
        name: string,

        @BodyProp()
        height: string,

        @BodyProp()
        height_inches: any,


        @BodyProp()
        hometown: string,

        @BodyProp()
        last_school: string,

        @BodyProp()
        pos: string, 

        @BodyProp()
        num: string

        ){
            console.log(pos, num);
            
            var temp = await this.playerRepo.find({name: name, height: height, height_inches: height_inches, hometown: hometown, last_school:last_school, year_played:team_year})
            .then(result=>{
                result.forEach(i=>{
                    i.pos = pos; 
                    i.num = num; 
                    this.playerRepo.save(i)
                    .then(()=>{
                        console.log(i.player_id, "saved");
                        
                    }); 
                })
                
            })
            
            
        }

    @SuccessResponse('201', 'inserted')
    @Put("/{team_year}/{team_name}")
    async addPlayer(team_name: string,
        team_year: string,
        @BodyProp()
        player_id: number,

        @BodyProp()
        year_played: number, 

        @BodyProp()
        first_name: string,

        @BodyProp()
        last_name: string,

        @BodyProp()
        name: string,

        @BodyProp()
        year: string,

        @BodyProp()
        height: string,

        @BodyProp()
        height_inches: any,

        @BodyProp()
        weight: any,

        @BodyProp()
        hometown: string,

        @BodyProp()
        last_school: string, 

        @Request() request: any
    ) {
        
        this.teamRepo.findOne({ name: team_name, year: team_year }).then(result_team => {
            this.playerRepo.insert({
                player_id: player_id, year_played: year_played as any, first_name: first_name, last_name: last_name, name: name, year: year, height: height,
                height_inches: height_inches, weight: weight, hometown: hometown, last_school: last_school, team: result_team
            }).catch(result=>{
                console.log("Error inserting");
                
            })
        })
        
        
    }

}