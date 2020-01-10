import {getRepository, Repository, QueryBuilder, SelectQueryBuilder, Like, getConnection, Brackets } from "typeorm";
import {NextFunction, Request, Response} from "express";
import { Query } from "typeorm/driver/Query";
import { isUndefined, isArray } from "util";
import NotParamException from "../exceptions/notParamException";
import { Player } from "../entity/Player";

//we need to cache metadata for pagination/filter builders


export function paginateAndApplyFilters(table: string, query: SelectQueryBuilder<any>, filter: string[], limit: number, offset: number, sort: string, hasWhere: boolean) {
    query.limit(limit < 500 ? limit : 500)
        .offset(isUndefined(offset) ? 0 : offset)

    if (!isUndefined(filter)) {
        if (filter.length >= 1) {
            var to_filer_on = filter[0].split("|");
            if (to_filer_on.length == 2) {
                hasWhere ? query.andWhere(`${table}.${to_filer_on[0]} like '\%${to_filer_on[1]}\%'`) : query.where(`${table}.${to_filer_on[0]} like '\%${to_filer_on[1]}\%'`);
                filter.shift(); 
            }
            
            if(filter.length >= 1){
                filter.forEach(value=>{
                    var to_filer_on = value.split("|"); 
                    if(to_filer_on.length == 2){
                        query.andWhere(`${table}.${to_filer_on[0]} like '\%${to_filer_on[1]}\%'`); 

                    }
                })
            }
        }
        
    }

}

export function applyFilters(table: string, query: SelectQueryBuilder<any>, filter: string[], hasWhere: boolean){
    if (!isUndefined(filter)) {
        if (filter.length >= 1) {
            var to_filer_on = filter[0].split("|");
            if (to_filer_on.length == 2) {
                hasWhere ? query.andWhere(`${table}.${to_filer_on[0]} like '\%${to_filer_on[1]}\%'`) : query.where(`${table}.${to_filer_on[0]} like '\%${to_filer_on[1]}\%'`);
                filter.shift(); 
            }
            
            if(filter.length >= 1){
                filter.forEach(value=>{
                    var to_filer_on = value.split("|"); 
                    if(to_filer_on.length == 2){
                        query.andWhere(`${table}.${to_filer_on[0]} like '\%${to_filer_on[1]}\%'`); 

                    }
                })
            }
        }
        
    }
}

export function paginateWithLimitAndOffset(query: SelectQueryBuilder<any>, limit, offset){
    query.limit(limit < 500 ? limit : 500)
         .offset(isUndefined(offset) ? 0 : offset)
}