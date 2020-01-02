/* 
Controller to handle conference->team or team->conference interaction endpoints

*/

import {NextFunction, Request, Response} from "express";
import { isUndefined } from "util";
import { getRepository } from "typeorm";
import { Conference } from "../entity/Conference";
import { Player } from "../entity/Player";
import { Team } from "../entity/Team";
import { QueryErrorFormatter } from "../utils/queryErrorFormatter";
import { checkIfExist } from "../utils/checkIfExists";
import { Route, Tags, SuccessResponse, Put, BodyProp, Controller } from "tsoa";

interface ConferenceTeamURLParams{
    year?: string, 
    conference_id?: string, 
    team_id?: string
}

@Route('team/conferences')
@Tags('Team->Conference')
export class ConferenceTeamController extends Controller {
    private conferenceTeamURLParams: ConferenceTeamURLParams;
    private isValid: boolean;
    private conferenceRepo = getRepository(Conference);
    private teamRepo = getRepository(Team);

    //not the best approach, but i'll just go ahead and add the teams here
    @SuccessResponse('201', 'Added to conference') // Custom success response
    @Put("/{team_year}")
    async addTeamToConference(team_year: string,
        @BodyProp() conference_name: string,
        @BodyProp() team_name: string) {
        this.conferenceRepo.findOne({ name: conference_name, year: team_year }).then(result => {
            this.teamRepo.insert({ conference: result, name: team_name, year: team_year })
        }).catch(_ => {
            throw "";

        });


    }
}