import { getRepository } from "typeorm";
import { Conference, PaginatedConference } from "../entity/Conference";
import { QueryErrorFormatter } from "../utils/queryErrorFormatter";
import { Controller, Route, Get, Request, BodyProp, Put , IntegerValidator, Body, Query, Tags, SuccessResponse, Post} from "tsoa"; 
import * as express from 'express'; 
import { QueryExpressionMap } from "typeorm/query-builder/QueryExpressionMap";
import { RequestOptions } from "http";
import { PaginationDoc } from "./models/paginationDoc";
import { paginateAndApplyFilters } from "../utils/paginationAndFilterBuilder";
@Route('conferences')
@Tags('Conference')
export class ConferenceContoller extends Controller {
    
    private conferenceRepo = getRepository(Conference);
    /**
     * @summary Get all conferences for a given year
     * @param filter value to filter on ex: name|filter
     * @param limit pagination value
     * @param offset 
     */
    
    @SuccessResponse('201', 'success')
    @Get("/{conference_year}")
    async getAllConferences(conference_year: string,
                            @Request() request: express.Request,
                            @Query('filter') filter?: string[],
                            @Query('limit') limit?: number,
                            @Query('offset') offset?: number,
                            @Query('sort') sort?: string
                            ) {
        
        console.log(conference_year, filter, limit, offset, sort);
        const paginationDoc = request.query as PaginationDoc; 
        console.log(paginationDoc);
        
        var query = this.conferenceRepo
                        .createQueryBuilder('conference')
                        .where("year=:year", {year: conference_year})

        paginateAndApplyFilters('conference',query, filter, limit, offset, sort, true); 
        console.log(query.getSql());
        
        return query.getManyAndCount()
        .then(result=>{
            console.log(result[0]);
            
            return {
                conferences: result[0], 
                count: result[1]
            } as PaginatedConference
        })
    }

    /**
     * 
     *
     * @summary Get a single conference
     * 
     * 
    */
    @SuccessResponse('201', 'Fetched') // Custom success response
    @Get("{conference_year}/{conference_name}")
    async getConference(conference_year: string, conference_name: string, @Request() request: express.Request) : Promise<Conference>{
        
        
        
        const thing =  this.conferenceRepo.findOne({name: conference_name, 
                                                    year: conference_year})
        
        return thing
        
    }

    /**
     * 
     *
     * @summary updates the conference
     * @param conference_year year of the conference
     * 
    */

   @SuccessResponse('201', 'updated') 
    @Post("/{conference_year}/{conference_name}")
    async updateConference(conference_year: string, 
                           conference_name: string){
        this.conferenceRepo.update({
            name: conference_name,
            year: conference_year
        } as Conference,
            {
                name: conference_name,
                year: conference_year
            } as Conference)
    }

    /**
     * @summary Add a new conference
     * @param conference_year 
     * @param conference_name 
     * @param request 
     */

    @SuccessResponse('201', 'Created') // Custom success response
    @Put("/{conference_year}")
    async addConference(conference_year: string, @BodyProp() conference_name: string){
        console.log("hit")
        console.log(conference_name, conference_year);
        
        this.conferenceRepo.insert({name: conference_name, 
                                    year: conference_year}); 

                
    }

}