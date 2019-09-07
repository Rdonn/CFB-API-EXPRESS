import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Player} from "../entity/Player";
import { paginateAndApplyFilters } from "../utils/paginationAndFilterBuilder";
import { QueryErrorFormatter } from "../utils/queryErrorFormatter";


export class PlayerController {
    

    private playerRepo = getRepository(Player);

    async all(request: Request, response: Response, next: NextFunction) {
        var query = this.playerRepo.createQueryBuilder("player"); 
        paginateAndApplyFilters(request, query, 'player');
        
        return query.getMany()
        .catch((reason)=>{
            response.status(400).send(QueryErrorFormatter.formatErrorMessage(reason));
        }); 
        
    }

    async one(request: Request, response: Response, next: NextFunction) {
        
        return this.playerRepo
        .createQueryBuilder("player")
        .where("player.player_id=:id", {id: request.params.player_id})
        .getOne()
        .catch((reason)=>{
            response.status(400).send(QueryErrorFormatter.formatErrorMessage(reason));
        }); 
        
    }

    async save(request: Request, response: Response, next: NextFunction) {
        //we need to verify a few things before we submit to the database
        //if the height in inches is not submitted, we need to calculate it... and if it is incorrect, we need to inform the user. 
        var player = <Player>request.body; 
        try {
            if (player.height != undefined) {
                if (player.height_inches == undefined) {
                    var height = player.height.split("'").map((x) => {
                        return Number(x)
                    });
                    player.height_inches = height[0] * 12 + height[1];

                }
                else {
                    //we need to verify the height
                    var height = player.height.split("'").map((x) => {
                        return Number(x)
                    });

                    if (player.height_inches != (height[0] * 12 + height[1])) {
                        response.status(400).send('INCORECT HEIGHT IN INCHES, PLEASE RECALCULATE.')
                        return
                    }
                }
            }
        }
        catch{
            response.status(400).send('INCORRECT FORMATTING FOR HEIGHT'); 
            return; 
        }
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