import { getRepository } from "typeorm";
import { Team, PaginatedTeam } from "../entity/Team";
import { NextFunction, Request, Response } from "express";
import { QueryErrorFormatter } from "../utils/queryErrorFormatter";
import { paginateAndApplyFilters } from "../utils/paginationAndFilterBuilder";
import { Route, Tags, Get, SuccessResponse, Controller, Query } from "tsoa";
import { Conference } from "../entity/Conference";
import { ApiError } from "../exceptions/APIErrorException";

@Route("teams")
@Tags("Team")
export class TeamController extends Controller{

    private teamRepository = getRepository(Team);
    private conferenceRepository = getRepository(Conference);
    //get a list of teams that belong to a conference during a certain year
    @Get("/{conference_year}/{conference_name}")
    @SuccessResponse('201', 'Fetched')
    async getTeamsForConference(conference_year: string, 
                                conference_name: string,
                                @Query('filter') filter?: string[],
                                @Query('limit') limit?: number,
                                @Query('offset') offset?: number,
                                @Query('sort') sort?: string){
        console.log("HIT");
        console.log(filter);
        
        console.log(conference_year, conference_name);  
        var query =  this.conferenceRepository.createQueryBuilder('conference')
        .innerJoinAndSelect('conference.teams', 'teams')
        .where('conference.name=:name', {name: conference_name})
        .andWhere('conference.year=:year', {year: conference_year})
        
        paginateAndApplyFilters('teams',query, filter, limit, offset, sort, true); 

        return query.getOne()
        .then(result=>{
            console.log(result);
            
            var teams: PaginatedTeam; 
            teams={
                teams: result.teams, 
                count: result.teams.length
            }
            return teams
        })
    }

    @Get("/{year}")
    async getTeamsForYear(year: string,
        @Query('filter') filter?: string[],
        @Query('limit') limit?: number,
        @Query('offset') offset?: number,
        @Query('sort') sort?: string) {
            console.log('hit');
            
            var query = this.teamRepository
            .createQueryBuilder('team')
            .where('year=:year', {year:year})
            paginateAndApplyFilters('team', query, filter, limit, offset, sort, true);

            return query.getManyAndCount().then(result=>{
                return {
                    teams: result[0], 
                    count: result[1]
                } as PaginatedTeam
            })
    }
    

}