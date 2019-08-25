import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Player} from "../entity/Player";
import { paginationUtils } from "../utils/paginationAndFilterBuilder";
import { QueryErrorFormatter } from "../utils/queryErrorFormatter";


export class PlayerController {
    

    private playerRepo = getRepository(Player);

    async all(request: Request, response: Response, next: NextFunction) {
        var query = this.playerRepo.createQueryBuilder("player"); 

        paginationUtils.filterBuilder(request, query, 'player'); 
        paginationUtils.paginationBuilder(request, query); 

        return query.getMany().catch((reason)=>{
            response.status(400).send(QueryErrorFormatter.formatErrorMessage(reason));
        }); 
        
    }

    async one(request: Request, response: Response, next: NextFunction) {
        console.log(request.params.player_id);
        
        return this.playerRepo
        .createQueryBuilder("player")
        .where("player.player_id=:id", {id: request.params.player_id})
        .getOne()
        .catch((reason)=>{
            response.status(400).send(QueryErrorFormatter.formatErrorMessage(reason));
        }); 
        
    }

    async save(request: Request, response: Response, next: NextFunction) {
        
        return this.playerRepo
        .save(request.body)
        .then(()=>{
            response.status(200).send('SUCCESS')
        })
        .catch((reason)=>{
            response.status(400).send(
                QueryErrorFormatter.formatErrorMessage(reason)
            )
        });  
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let playerToRemove = await this.playerRepo.findOne(request.params.player_id);
        await this.playerRepo
        .remove(playerToRemove)
        .then(()=>{
            response.status(200).send('SUCCESS'); 
        })
        .catch((reason)=>{
            response.status(400).send(QueryErrorFormatter.formatErrorMessage(reason));
        }); ;
    }

}