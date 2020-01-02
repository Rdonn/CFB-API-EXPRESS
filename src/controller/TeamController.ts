import { getRepository } from "typeorm";
import { Team } from "../entity/Team";
import { NextFunction, Request, Response } from "express";
import { QueryErrorFormatter } from "../utils/queryErrorFormatter";
import { paginateAndApplyFilters } from "../utils/paginationAndFilterBuilder";
import { Route, Tags, Get, SuccessResponse, Controller } from "tsoa";
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
    async getTeamsForConference(conference_year: string, conference_name: string){
        console.log("HIT");
        console.log(conference_year, conference_name);  
        return this.conferenceRepository.find({relations:["teams"], where:{name:conference_name, year:conference_year}});
    }
    

}