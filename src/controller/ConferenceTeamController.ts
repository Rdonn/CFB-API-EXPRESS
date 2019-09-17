import {NextFunction, Request, Response} from "express";
import { isUndefined } from "util";
import { getRepository } from "typeorm";
import { Conference } from "../entity/Conference";
import { Player } from "../entity/Player";
import { Team } from "../entity/Team";
import { QueryErrorFormatter } from "../utils/queryErrorFormatter";
import { checkIfExist } from "../utils/checkIfExists";

interface ConferenceTeamURLParams{
    year?: string, 
    conference_id?: string, 
    team_id?: string
}


export class ConferenceTeamController{
    private conferenceTeamURLParams : ConferenceTeamURLParams; 
    private isValid : boolean; 
    private conferenceRepo = getRepository(Conference); 
    private teamRepo = getRepository(Team); 

    private checkRequestValidity(request: Request){
        this.conferenceTeamURLParams = request.params; 
        this.isValid = (!(isUndefined(this.conferenceTeamURLParams.year) ||
            isUndefined(this.conferenceTeamURLParams.conference_id) ||
            isUndefined(this.conferenceTeamURLParams.team_id))); 

    }
    async addTeamToConference(request: Request, response: Response, next: NextFunction){
        this.checkRequestValidity(request); 

        if (this.isValid){
            var conferece = <Conference> await this.conferenceRepo
                .createQueryBuilder('conference')
                .where(`conference.conference_id=:id`, { id: this.conferenceTeamURLParams.conference_id })
                .getOne()
                .catch(reason => {
                    response.status(400).send(QueryErrorFormatter.formatErrorMessage(reason));
                })
            var team = <Team> await this.teamRepo
                .createQueryBuilder('team')
                .where(`team.team_id:id`, { id: this.conferenceTeamURLParams.team_id })
                .getOne()
                .catch(reason => {
                    response.status(400).send(QueryErrorFormatter.formatErrorMessage(reason));
                })
            var validity = checkIfExist([conferece, team], 
                        ['conference id: ' + this.conferenceTeamURLParams.team_id, 'team id: ' + this.conferenceTeamURLParams.team_id])
            if(validity[0]){
                team.conference = conferece; 
                this.teamRepo.manager
                .save(team)
                .catch(reason => {
                    response.status(400).send(QueryErrorFormatter.formatErrorMessage(reason));
                })
                .then(_=>{
                    response.status(200).send('success'); 
                })
            }
            else{
                response.status(400).send(validity[1]); 
            }

        }
        else{
            response.status(400).send("Invalid request"); 
        }
    }
}