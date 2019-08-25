import { getRepository, Repository, QueryBuilder, SelectQueryBuilder } from "typeorm";
import {NextFunction, Request, Response} from "express";
import { Query } from "typeorm/driver/Query";
import { isUndefined } from "util";
import NotParamException from "../exceptions/notParamException";

export class paginationUtils {

    public static sortingFilter(request: Request, 
                                query: SelectQueryBuilder<any>,
                                type: string){
                                    
        if (!isUndefined(request.query.sort)) {
            const sortArg = decodeURI(<string>request.query.sort).split('|');
            if (sortArg.length == 2) {
                const sort = {
                    sortName: sortArg[0],
                    sortValue: sortArg[1]
                }
                query.orderBy(`'${type}'.'${sort.sortName}'='${sort.sortValue}'`);

            }
        }
     }

    public static filterBuilder(request: Request,
        query: SelectQueryBuilder<any>,
        type: string) {
        if (!isUndefined(request.query.filter)) {
            const filterArg = decodeURI(<string>request.query.filter).split('|');
            if (filterArg.length == 2) {
                const filter = {
                    filterName: filterArg[0],
                    filterValue: filterArg[1]
                }
                query.where(`'${type}'.'${filter.filterName}' like '${filter.filterValue}'`);

            }
        }
    }

    public static paginationBuilder(request: Request,
        query: SelectQueryBuilder<any>) {

        if (request.query.offset != undefined) {
            console.log(request.query.offset);
            
            query.skip(request.query.offset);
        }

        if (request.query.limit != undefined) {
            query.limit(request.query.limit);
        }
    }
}