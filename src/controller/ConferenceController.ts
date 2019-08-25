import { getRepository } from "typeorm";
import { Conference } from "../entity/Conference";
import {NextFunction, Request, Response} from "express";
import { QueryErrorFormatter } from "../utils/queryErrorFormatter";

export class ConferenceContoller {
    public conferenceRepo = getRepository(Conference)
    async save(request: Request, response: Response, next: NextFunction) {

        return this.conferenceRepo
            .save(request.body)
            .then(() => {
                response.status(200).send('SUCCESS');
            })
            .catch((reason) => {
                response.status(400).send(
                    QueryErrorFormatter.formatErrorMessage(reason)
                );
            });
    }
}