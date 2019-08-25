import { getRepository } from "typeorm";
import { Team } from "../entity/Team";
import {NextFunction, Request, Response} from "express";
import { QueryErrorFormatter } from "../utils/queryErrorFormatter";

export class TeamController{

    private teamRepository = getRepository(Team);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.teamRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        console.log(request.params.Key);
        let to_search_params = {
            'team_id': request.params.team_id, 
            'year': request.params.year
        }
        
        return this.teamRepository.findOne(to_search_params);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.teamRepository
            .save(request.body)
            .then(() => response.status(200).send())
            .catch((reason) => {
                response.status(400).send(
                    QueryErrorFormatter.formatErrorMessage(reason)
                )
            });
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let teamToRemove = await this.teamRepository.findOne(request.params.team_id);
        await this.teamRepository.remove(teamToRemove);
    }
}