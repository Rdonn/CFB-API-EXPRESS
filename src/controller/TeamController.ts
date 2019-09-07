import { getRepository } from "typeorm";
import { Team } from "../entity/Team";
import { NextFunction, Request, Response } from "express";
import { QueryErrorFormatter } from "../utils/queryErrorFormatter";
import { paginateAndApplyFilters } from "../utils/paginationAndFilterBuilder";

export class TeamController {

    private teamRepository = getRepository(Team);

    async all(request: Request, response: Response, next: NextFunction) {
        var query = this.teamRepository.createQueryBuilder("team");
        paginateAndApplyFilters(request, query, 'team');

        return query.getMany()
            .catch((reason) => {
                response.status(400).send(QueryErrorFormatter.formatErrorMessage(reason));
            });
    }

    async one(request: Request, response: Response, next: NextFunction) {

        return this.teamRepository
            .createQueryBuilder("team")
            .where("team.team_id=:id", { id: request.params.team_id })
            .getOne()
            .catch((reason) => {
                response.status(400).send(QueryErrorFormatter.formatErrorMessage(reason));
            });
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
        await this.teamRepository
            .remove(teamToRemove)
            .then(() => response.status(200).send())
            .catch((reason) => {
                response.status(400).send(
                    QueryErrorFormatter.formatErrorMessage(reason)
                );
            });
    }
}