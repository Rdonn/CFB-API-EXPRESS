import {getRepository, SimpleConsoleLogger, getConnection} from "typeorm";
import {NextFunction, Response} from "express";
import {Player, PaginatedPlayer} from "../entity/Player";
import { QueryErrorFormatter } from "../utils/queryErrorFormatter";
import { SuccessResponse, Get, Route, Tags, BodyProp, Put, Request, Query, Controller, Post, Body } from "tsoa";
import { Team } from "../entity/Team";
import * as express from 'express';
import { isUndefined } from "util";
import { Conference } from "../entity/Conference";
import { QueryExpressionMap } from "typeorm/query-builder/QueryExpressionMap";
import { Representation } from "./models/statRepresentation";
import { paginateAndApplyFilters, paginateWithLimitAndOffset, applyFilters } from "../utils/paginationAndFilterBuilder";

@Route('players')
@Tags('Players')
export class PlayerController extends Controller{
    

    private playerRepo = getRepository(Player);
    private teamRepo  = getRepository(Team);
    private conferenceRepo = getRepository(Conference); 
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
    

    
    @Get("")
    async getPlayers(
    @Query('team_filter') teamFilter?: string[],
    @Query('player_filter') playerFilter?: string[],
    @Query('limit') limit?: number,
    @Query('offset') offset?: number,
    @Query('sort') sort?: string){
        var query = this.playerRepo.createQueryBuilder('player')
        .innerJoinAndSelect('player.team', 'team');
        
        
        paginateWithLimitAndOffset(query, limit, offset); 
        applyFilters('team', query, teamFilter, true); 
        applyFilters('player', query, playerFilter, true); 
        return query.getManyAndCount()
        .then(result=>{
            return {
                count: result[1],
                players: result[0]
            } as PaginatedPlayer
        })

        
    }

    @Get("/player/statistics/{player_id}")
    async getPlayerWithStatistics(player_id: string){
        var query = this.playerRepo.createQueryBuilder('player')
        .where("player.player_id=:id", {id: player_id})


        Object.keys(this.playerCategories).forEach(result=>{
            query.leftJoinAndSelect(`player.${result}`, result);
            
        })

        query.leftJoinAndSelect('player.team', 'team')

        return query.getMany(); 


    }

    @Get("/player/{player_id}")
    async getPlayerYears(player_id: string){
        return this.playerRepo.createQueryBuilder('player')
        .where("player.player_id=:id", {id: player_id})
        .getManyAndCount()
        .then(result=>{
            let temp = {
                count: result[1], 
                players: result[0]
            } as PaginatedPlayer

            console.log(temp);

            return temp; 
            
        })
    }

    @Get("/conference")
    async getPlayersByConference(
    @Request() request: express.Request,
    @Query('conference') conference: string, 
    @Query('conference_year') conference_year: string,
    @Query('team_name') team_name?: string,
    @Query('filter') filter?: string[],
    @Query('limit') limit?: number,
    @Query('offset') offset?: number,
    @Query('sort') sort?: string
    ){
        if(isUndefined(conference) && isUndefined(conference_year)){
            this.setHeader('status', '400');
            return {}; 
        }

        var query = this.playerRepo.createQueryBuilder('player')
        .innerJoinAndSelect('player.team', 'team')
        .innerJoin('team.conference', 'conference')
        .where('conference.name=:name', {name: conference})
        .andWhere('conference.year=:year', {year: conference_year})

        if (!isUndefined(team_name)){
            query.andWhere(`team.name like '\%${team_name}\%'`)
        }


        
        paginateAndApplyFilters('player',query, filter, limit, offset, sort, true); 

        return query.getManyAndCount()
        .then(result=>{
            var players: PaginatedPlayer; 
            
            players = {
                players: result[0], 
                count: result[1]
            }
            return players; 
        }); 

    }
    
    @SuccessResponse('201', 'retrieved')
    @Get("/team")
    async getPlayersByTeam(
    @Request() request: express.Request,
    @Query('school') school:string, 
    @Query('year') school_year?:string,
    @Query('filter') filter?: string,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
    @Query('sort') sort?: string
    ){
        var query = this.playerRepo.createQueryBuilder('player')
        .limit(500)
        .offset(0)
        
        
        query.innerJoin('player.team', 'team')
        .where('team.name=:name', {name: school})
            
        

        if (!isUndefined(school_year)){
            query.andWhere('team.year=:year', {year: school_year})
        }

        return query.getManyAndCount().then(result=>{
            var players: PaginatedPlayer; 
            players = {
                players: result[0],
                count: result[1]
            }
            return players; 
        })
        
        
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

    @Get("/stats/categories/representation/{player_id}/{player_year}")
    async getCategories(player_id: number, player_year: string){
        var query = this.playerRepo.createQueryBuilder('player')
        .where('player.player_id=:id', {id: player_id})
        .andWhere('player.year_played=:year', {year: player_year});
        
        Object.keys(this.playerCategories).forEach(result=>{
            query.leftJoinAndSelect(`player.${result}`, result);
            
        })
        
        return query.getOne()
        .then(result=>{
            var temp: any = {}; 
            Object.keys(result).forEach(key=>{
                if (Object.keys(this.playerCategories).includes(key)){
                    temp[key] = result[key] != null
                }
            })
            temp['player_id'] = result.player_id; 
            temp['year_played'] = result.year_played; 

            return temp as Representation; 
        })
        
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