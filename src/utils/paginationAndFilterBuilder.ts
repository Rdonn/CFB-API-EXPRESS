import { getRepository, Repository, QueryBuilder, SelectQueryBuilder, Like, getConnection, Brackets } from "typeorm";
import {NextFunction, Request, Response} from "express";
import { Query } from "typeorm/driver/Query";
import { isUndefined, isArray } from "util";
import NotParamException from "../exceptions/notParamException";
import { Player } from "../entity/Player";

//we need to cache metadata for pagination/filter builders



export function paginateAndApplyFilters(request: Request, 
            query: SelectQueryBuilder<any>,
            type: string){
    paginationUtils.initializeMeta(request, type); 
    paginationUtils.sortingFilter(request, query, type); 
    paginationUtils.filterBuilder(request, query, type); 
    paginationUtils.paginationBuilder(request, query, type); 
}

export class paginationUtils {
    public static cachedMetadata: Map<string, Set<string>> = new Map(); 
    
    public static initializeMeta(request: Request, type: string){
        if (isUndefined(this.cachedMetadata.get(type))){
            
            this.cachedMetadata.set(type, new Set<string>())
            getConnection().getMetadata(type).columns.forEach(value=>{
                this.cachedMetadata.get(type).add(value.databaseName); 
            })

        }
    }

    public static sortingFilter(request: Request, 
                                query: SelectQueryBuilder<any>,
                                type: string){
        
        if (!isUndefined(request.query.sort)) {
            if (isArray(request.query.sort)) {
                return
            }
            const sortArg = decodeURI(<string>request.query.sort).split('|');
            if (sortArg.length == 2) {
                const sort = {
                    sortName: sortArg[0],
                    sortValue: sortArg[1]
                }
                if (!isUndefined(this.cachedMetadata.has(type)) && 
                    this.cachedMetadata.get(type).has(sort.sortName)){
                        query.orderBy(`'${type}'.'${sort.sortName}'='${sort.sortValue}'`);
                    }
                

            }
        }
    }

    public static filterBuilder(request: Request,
        query: SelectQueryBuilder<any>,
        type: string) {
    
        
        if (!isUndefined(request.query.filter)) {
            
            
            if (!isArray(request.query.filter)){
                request.query.filter = [request.query.filter] as Array<any>; 
            }
             
            var builder = new Array<Object>(); 
            request.query.filter.forEach((value:any, index: number)=>{
                const filterArg = decodeURI(<string>value).split('|');
                if (filterArg.length == 2) {
                    const filter = {
                        filterName: filterArg[0],
                        filterValue: filterArg[1]
                    }
                    if (!isUndefined(this.cachedMetadata.has(type)) &&
                        this.cachedMetadata.get(type).has(filter.filterName)) {
                        if (index == 0) {
                            query.where(`'${type}'.'${filter.filterName}' LIKE '%${filter.filterValue}%'`)
                        }
                        else {
                            query.andWhere(`'${type}'.'${filter.filterName}' LIKE '%${filter.filterValue}%'`)
                        }
                    }

                }

            })
        }
    }

    public static paginationBuilder(request: Request,
        query: SelectQueryBuilder<any>,
        type: string) {
        if (isArray(request.query.offset) || isArray(request.query.offset)){
            return
        }

        if (request.query.offset != undefined) {
            query.skip(request.query.offset);
        }

        if (request.query.limit != undefined) {
            query.limit(request.query.limit);
        }
    }
}