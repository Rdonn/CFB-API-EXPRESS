import { getRepository } from "typeorm";
import { Conference } from "../entity/Conference";
import {NextFunction, Request, Response} from "express";
import { QueryErrorFormatter } from "../utils/queryErrorFormatter";
import { paginateAndApplyFilters } from "../utils/paginationAndFilterBuilder";

export class ConferenceContoller {
    
    private conferenceRepo = getRepository(Conference);

    async all(request: Request, response: Response, next: NextFunction) {
        var query = this.conferenceRepo.createQueryBuilder("conference");
        paginateAndApplyFilters(request, query, 'conference');

        return query.getMany()
            .catch((reason) => {
                response.status(400).send(QueryErrorFormatter.formatErrorMessage(reason));
            });
    }

    async one(request: Request, response: Response, next: NextFunction) {

        return this.conferenceRepo
            .createQueryBuilder("conference")
            .where("conference.conference_id=:id", { id: request.params.conference_id })
            .getOne()
            .catch((reason) => {
                response.status(400).send(QueryErrorFormatter.formatErrorMessage(reason));
            });
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.conferenceRepo
            .save(request.body)
            .then(() => response.status(200).send())
            .catch((reason) => {
                response.status(400).send(
                    QueryErrorFormatter.formatErrorMessage(reason)
                )
            });
    }

    async remove(request: Request, response: Response, next: NextFunction) {

        let conferenceToRemove = await this.conferenceRepo.findOne(request.params.conference_id);
        await this.conferenceRepo
            .remove(conferenceToRemove)
            .then(() => response.status(200).send())
            .catch((reason) => {
                response.status(400).send(
                    QueryErrorFormatter.formatErrorMessage(reason)
                );
            });
    }
}