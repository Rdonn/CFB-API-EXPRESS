/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { Controller, ValidationService, FieldErrors, ValidateError, TsoaRoute } from 'tsoa';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { PlayerController } from './../controller/PlayerController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TeamController } from './../controller/TeamController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ConferenceContoller } from './../controller/ConferenceController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ConferenceTeamController } from './../controller/ConferenceTeamController';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { StatisticsController } from './../controller/StatisticsController';
import * as express from 'express';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "Player": {
        "properties": {
            "player_id": { "dataType": "double", "required": true },
            "year_played": { "dataType": "string", "required": true },
            "first_name": { "dataType": "string", "required": true },
            "last_name": { "dataType": "string", "required": true },
            "name": { "dataType": "string", "required": true },
            "pos": { "dataType": "string", "required": true },
            "num": { "dataType": "string", "required": true },
            "year": { "dataType": "string", "required": true },
            "height": { "dataType": "string", "required": true },
            "height_inches": { "dataType": "double", "required": true },
            "weight": { "dataType": "double", "required": true },
            "hometown": { "dataType": "string", "required": true },
            "last_school": { "dataType": "string", "required": true },
            "has_stats": { "dataType": "boolean", "required": true },
            "rank": { "dataType": "string" },
            "team": { "ref": "Team", "required": true },
            "allPurposeRunning": { "ref": "AllPurposeRunning", "required": true },
            "fumbleReturns": { "ref": "FumbleReturns", "required": true },
            "interceptions": { "ref": "Interceptions", "required": true },
            "kickoffReturn": { "ref": "KickoffReturn", "required": true },
            "kickoffs": { "ref": "Kickoffs", "required": true },
            "miscDefense": { "ref": "MiscDefense", "required": true },
            "passing": { "ref": "Passing", "required": true },
            "placeKicking": { "ref": "PlaceKicking", "required": true },
            "puntReturn": { "ref": "PuntReturn", "required": true },
            "punting": { "ref": "Punting", "required": true },
            "receiving": { "ref": "Receiving", "required": true },
            "rushing": { "ref": "Rushing", "required": true },
            "sacks": { "ref": "Sacks", "required": true },
            "scoring": { "ref": "Scoring", "required": true },
            "tackles": { "ref": "Tackles", "required": true },
            "tacklesForLoss": { "ref": "TacklesForLoss", "required": true },
            "totalOffense": { "ref": "TotalOffense", "required": true },
            "yardsFromScrimmage": { "ref": "YardsFromScrimmage", "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Team": {
        "properties": {
            "year": { "dataType": "string", "required": true },
            "name": { "dataType": "string", "required": true },
            "players": { "dataType": "array", "array": { "ref": "Player" }, "required": true },
            "conference": { "ref": "Conference", "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Conference": {
        "properties": {
            "name": { "dataType": "string", "required": true },
            "year": { "dataType": "string", "required": true },
            "teams": { "dataType": "array", "array": { "ref": "Team" }, "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "AllPurposeRunning": {
        "properties": {
            "playerid": { "dataType": "double", "required": true },
            "yearplayed": { "dataType": "string", "required": true },
            "G": { "dataType": "double", "required": true },
            "IntRet": { "dataType": "double", "required": true },
            "KickRet": { "dataType": "double", "required": true },
            "Plays": { "dataType": "double", "required": true },
            "PuntRet": { "dataType": "double", "required": true },
            "Recv": { "dataType": "double", "required": true },
            "Rush": { "dataType": "double", "required": true },
            "Split": { "dataType": "string", "required": true },
            "TotalYards": { "dataType": "double", "required": true },
            "YardsG": { "dataType": "double", "required": true },
            "YardsPlay": { "dataType": "double", "required": true },
            "player": { "ref": "Player", "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "FumbleReturns": {
        "properties": {
            "playerid": { "dataType": "double", "required": true },
            "yearplayed": { "dataType": "double", "required": true },
            "FumRet": { "dataType": "double", "required": true },
            "G": { "dataType": "double", "required": true },
            "Split": { "dataType": "string", "required": true },
            "TD": { "dataType": "double", "required": true },
            "Yards": { "dataType": "double", "required": true },
            "player": { "ref": "Player", "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Interceptions": {
        "properties": {
            "playerid": { "dataType": "double", "required": true },
            "yearplayed": { "dataType": "string", "required": true },
            "G": { "dataType": "double", "required": true },
            "Int": { "dataType": "double", "required": true },
            "IntG": { "dataType": "double", "required": true },
            "Split": { "dataType": "string", "required": true },
            "TD": { "dataType": "double", "required": true },
            "Yards": { "dataType": "double", "required": true },
            "player": { "ref": "Player", "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "KickoffReturn": {
        "properties": {
            "playerid": { "dataType": "double", "required": true },
            "yearplayed": { "dataType": "string", "required": true },
            "Avg": { "dataType": "double", "required": true },
            "G": { "dataType": "double", "required": true },
            "Ret": { "dataType": "double", "required": true },
            "RetG": { "dataType": "double", "required": true },
            "Split": { "dataType": "string", "required": true },
            "TD": { "dataType": "double", "required": true },
            "Yards": { "dataType": "double", "required": true },
            "YardsG": { "dataType": "double", "required": true },
            "player": { "ref": "Player", "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Kickoffs": {
        "properties": {
            "playerid": { "dataType": "double", "required": true },
            "yearplayed": { "dataType": "string", "required": true },
            "Avg": { "dataType": "double", "required": true },
            "G": { "dataType": "double", "required": true },
            "Kickoffs": { "dataType": "double", "required": true },
            "Onside": { "dataType": "double", "required": true },
            "OutOfBounds": { "dataType": "double", "required": true },
            "Split": { "dataType": "string", "required": true },
            "Touchback": { "dataType": "double", "required": true },
            "Yards": { "dataType": "double", "required": true },
            "player": { "ref": "Player", "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "MiscDefense": {
        "properties": {
            "playerid": { "dataType": "double", "required": true },
            "yearplayed": { "dataType": "string", "required": true },
            "FumblesForced": { "dataType": "double", "required": true },
            "G": { "dataType": "double", "required": true },
            "KicksPuntsBlocked": { "dataType": "double", "required": true },
            "PassesBrokenUp": { "dataType": "double", "required": true },
            "QBHurries": { "dataType": "double", "required": true },
            "Split": { "dataType": "string", "required": true },
            "player": { "ref": "Player", "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Passing": {
        "properties": {
            "playerid": { "dataType": "double", "required": true },
            "yearplayed": { "dataType": "string", "required": true },
            "Att": { "dataType": "double", "required": true },
            "AttG": { "dataType": "double", "required": true },
            "Comp": { "dataType": "double", "required": true },
            "G": { "dataType": "double", "required": true },
            "Int": { "dataType": "double", "required": true },
            "Pct": { "dataType": "double", "required": true },
            "Rating": { "dataType": "double", "required": true },
            "Split": { "dataType": "string", "required": true },
            "TD": { "dataType": "double", "required": true },
            "Yards": { "dataType": "double", "required": true },
            "YardsAtt": { "dataType": "double", "required": true },
            "YardsG": { "dataType": "double", "required": true },
            "player": { "ref": "Player", "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PlaceKicking": {
        "properties": {
            "playerid": { "dataType": "double", "required": true },
            "yearplayed": { "dataType": "string", "required": true },
            "Att": { "dataType": "double", "required": true },
            "AttG": { "dataType": "double", "required": true },
            "ExtraPoint": { "dataType": "double", "required": true },
            "FieldGoal": { "dataType": "double", "required": true },
            "G": { "dataType": "double", "required": true },
            "Made": { "dataType": "double", "required": true },
            "MadeG": { "dataType": "double", "required": true },
            "Pct": { "dataType": "double", "required": true },
            "Split": { "dataType": "string", "required": true },
            "player": { "ref": "Player", "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PuntReturn": {
        "properties": {
            "playerid": { "dataType": "double", "required": true },
            "yearplayed": { "dataType": "string", "required": true },
            "Avg": { "dataType": "double", "required": true },
            "G": { "dataType": "double", "required": true },
            "Ret": { "dataType": "double", "required": true },
            "RetG": { "dataType": "double", "required": true },
            "Split": { "dataType": "string", "required": true },
            "TD": { "dataType": "double", "required": true },
            "Yards": { "dataType": "double", "required": true },
            "YardsG": { "dataType": "double", "required": true },
            "player": { "ref": "Player", "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Punting": {
        "properties": {
            "playerid": { "dataType": "double", "required": true },
            "yearplayed": { "dataType": "string", "required": true },
            "Avg": { "dataType": "double", "required": true },
            "G": { "dataType": "double", "required": true },
            "Punts": { "dataType": "double", "required": true },
            "PuntsG": { "dataType": "double", "required": true },
            "Split": { "dataType": "string", "required": true },
            "Yards": { "dataType": "double", "required": true },
            "YardsG": { "dataType": "double", "required": true },
            "player": { "ref": "Player", "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Receiving": {
        "properties": {
            "playerid": { "dataType": "double", "required": true },
            "yearplayed": { "dataType": "string", "required": true },
            "Avg": { "dataType": "double", "required": true },
            "G": { "dataType": "double", "required": true },
            "Rec": { "dataType": "double", "required": true },
            "RecG": { "dataType": "double", "required": true },
            "Split": { "dataType": "string", "required": true },
            "TD": { "dataType": "double", "required": true },
            "Yards": { "dataType": "double", "required": true },
            "YardsG": { "dataType": "double", "required": true },
            "player": { "ref": "Player", "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Rushing": {
        "properties": {
            "playerid": { "dataType": "double", "required": true },
            "yearplayed": { "dataType": "string", "required": true },
            "Att": { "dataType": "double", "required": true },
            "AttG": { "dataType": "double", "required": true },
            "Avg": { "dataType": "double", "required": true },
            "G": { "dataType": "double", "required": true },
            "Split": { "dataType": "string", "required": true },
            "TD": { "dataType": "double", "required": true },
            "Yards": { "dataType": "double", "required": true },
            "YardsG": { "dataType": "double", "required": true },
            "player": { "ref": "Player", "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Sacks": {
        "properties": {
            "playerid": { "dataType": "double", "required": true },
            "yearplayed": { "dataType": "string", "required": true },
            "G": { "dataType": "double", "required": true },
            "SackYards": { "dataType": "double", "required": true },
            "Sacks": { "dataType": "double", "required": true },
            "SacksG": { "dataType": "double", "required": true },
            "Split": { "dataType": "string", "required": true },
            "player": { "ref": "Player", "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Scoring": {
        "properties": {
            "playerid": { "dataType": "double", "required": true },
            "yearplayed": { "dataType": "string", "required": true },
            "XP": { "dataType": "double", "required": true },
            "FG": { "dataType": "double", "required": true },
            "G": { "dataType": "double", "required": true },
            "Points": { "dataType": "double", "required": true },
            "PointsG": { "dataType": "double", "required": true },
            "Safety": { "dataType": "double", "required": true },
            "Split": { "dataType": "string", "required": true },
            "TD": { "dataType": "double", "required": true },
            "player": { "ref": "Player", "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Tackles": {
        "properties": {
            "playerid": { "dataType": "double", "required": true },
            "yearplayed": { "dataType": "string", "required": true },
            "Assisted": { "dataType": "double", "required": true },
            "G": { "dataType": "double", "required": true },
            "Solo": { "dataType": "double", "required": true },
            "Split": { "dataType": "string", "required": true },
            "Total": { "dataType": "double", "required": true },
            "TotalG": { "dataType": "double", "required": true },
            "player": { "ref": "Player", "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TacklesForLoss": {
        "properties": {
            "playerid": { "dataType": "double", "required": true },
            "yearplayed": { "dataType": "string", "required": true },
            "G": { "dataType": "double", "required": true },
            "Split": { "dataType": "string", "required": true },
            "TFL": { "dataType": "double", "required": true },
            "TFLYards": { "dataType": "double", "required": true },
            "TFLG": { "dataType": "double", "required": true },
            "player": { "ref": "Player", "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "TotalOffense": {
        "properties": {
            "playerid": { "dataType": "double", "required": true },
            "yearplayed": { "dataType": "string", "required": true },
            "G": { "dataType": "double", "required": true },
            "PassYards": { "dataType": "double", "required": true },
            "Plays": { "dataType": "double", "required": true },
            "RushYards": { "dataType": "double", "required": true },
            "Split": { "dataType": "string", "required": true },
            "TotalYards": { "dataType": "double", "required": true },
            "YardsG": { "dataType": "double", "required": true },
            "YardsPlay": { "dataType": "double", "required": true },
            "player": { "ref": "Player", "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "YardsFromScrimmage": {
        "properties": {
            "playerid": { "dataType": "double", "required": true },
            "yearplayed": { "dataType": "string", "required": true },
            "G": { "dataType": "double", "required": true },
            "Plays": { "dataType": "double", "required": true },
            "RecvYards": { "dataType": "double", "required": true },
            "RushYards": { "dataType": "double", "required": true },
            "Split": { "dataType": "string", "required": true },
            "TD": { "dataType": "double", "required": true },
            "TotalYards": { "dataType": "double", "required": true },
            "YardsG": { "dataType": "double", "required": true },
            "YardsPlay": { "dataType": "double", "required": true },
            "player": { "ref": "Player", "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PaginatedPlayer": {
        "properties": {
            "players": { "dataType": "array", "array": { "ref": "Player" }, "required": true },
            "count": { "dataType": "double", "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Representation": {
        "properties": {
            "player_id": { "dataType": "double", "required": true },
            "year_played": { "dataType": "string", "required": true },
            "allPurposeRunning": { "dataType": "boolean", "required": true },
            "fumbleReturns": { "dataType": "boolean", "required": true },
            "interceptions": { "dataType": "boolean", "required": true },
            "kickoffReturn": { "dataType": "boolean", "required": true },
            "kickoffs": { "dataType": "boolean", "required": true },
            "miscDefense": { "dataType": "boolean", "required": true },
            "passing": { "dataType": "boolean", "required": true },
            "placeKicking": { "dataType": "boolean", "required": true },
            "puntReturn": { "dataType": "boolean", "required": true },
            "punting": { "dataType": "boolean", "required": true },
            "receiving": { "dataType": "boolean", "required": true },
            "rushing": { "dataType": "boolean", "required": true },
            "sacks": { "dataType": "boolean", "required": true },
            "scoring": { "dataType": "boolean", "required": true },
            "tackles": { "dataType": "boolean", "required": true },
            "tacklesForLoss": { "dataType": "boolean", "required": true },
            "totalOffense": { "dataType": "boolean", "required": true },
            "yardsFromScrimmage": { "dataType": "boolean", "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PaginatedTeam": {
        "properties": {
            "teams": { "dataType": "array", "array": { "ref": "Team" }, "required": true },
            "count": { "dataType": "double", "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "PaginatedConference": {
        "properties": {
            "conferences": { "dataType": "array", "array": { "ref": "Conference" }, "required": true },
            "count": { "dataType": "double", "required": true },
        },
        "additionalProperties": true,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new ValidationService(models);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: express.Express) {
    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################
    app.get('/players',
        function(request: any, response: any, next: any) {
            const args = {
                teamFilter: { "in": "query", "name": "team_filter", "dataType": "array", "array": { "dataType": "string" } },
                playerFilter: { "in": "query", "name": "player_filter", "dataType": "array", "array": { "dataType": "string" } },
                limit: { "in": "query", "name": "limit", "dataType": "double" },
                offset: { "in": "query", "name": "offset", "dataType": "double" },
                sort: { "in": "query", "name": "sort", "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new PlayerController();


            const promise = controller.getPlayers.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/players/player/statistics/:player_id',
        function(request: any, response: any, next: any) {
            const args = {
                player_id: { "in": "path", "name": "player_id", "required": true, "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new PlayerController();


            const promise = controller.getPlayerWithStatistics.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/players/player/:player_id',
        function(request: any, response: any, next: any) {
            const args = {
                player_id: { "in": "path", "name": "player_id", "required": true, "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new PlayerController();


            const promise = controller.getPlayerYears.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/players/conference',
        function(request: any, response: any, next: any) {
            const args = {
                request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                conference: { "in": "query", "name": "conference", "required": true, "dataType": "string" },
                conference_year: { "in": "query", "name": "conference_year", "required": true, "dataType": "string" },
                team_name: { "in": "query", "name": "team_name", "dataType": "string" },
                filter: { "in": "query", "name": "filter", "dataType": "array", "array": { "dataType": "string" } },
                limit: { "in": "query", "name": "limit", "dataType": "double" },
                offset: { "in": "query", "name": "offset", "dataType": "double" },
                sort: { "in": "query", "name": "sort", "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new PlayerController();


            const promise = controller.getPlayersByConference.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/players/team',
        function(request: any, response: any, next: any) {
            const args = {
                request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                school: { "in": "query", "name": "school", "required": true, "dataType": "string" },
                school_year: { "in": "query", "name": "year", "dataType": "string" },
                filter: { "in": "query", "name": "filter", "dataType": "string" },
                limit: { "in": "query", "name": "limit", "dataType": "string" },
                offset: { "in": "query", "name": "offset", "dataType": "string" },
                sort: { "in": "query", "name": "sort", "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new PlayerController();


            const promise = controller.getPlayersByTeam.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/players/stats/:category',
        function(request: any, response: any, next: any) {
            const args = {
                category: { "in": "path", "name": "category", "required": true, "dataType": "string" },
                filter: { "in": "query", "name": "filter", "dataType": "string" },
                limit: { "in": "query", "name": "limit", "dataType": "double" },
                offset: { "in": "query", "name": "offset", "dataType": "double" },
                sort: { "in": "query", "name": "sort", "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new PlayerController();


            const promise = controller.getListOfPlayerStats.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/players/stats/:player_id/:player_year/:category',
        function(request: any, response: any, next: any) {
            const args = {
                player_id: { "in": "path", "name": "player_id", "required": true, "dataType": "double" },
                player_year: { "in": "path", "name": "player_year", "required": true, "dataType": "string" },
                category: { "in": "path", "name": "category", "required": true, "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new PlayerController();


            const promise = controller.getCategoryByString.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/players/stats/categories/representation/:player_id/:player_year',
        function(request: any, response: any, next: any) {
            const args = {
                player_id: { "in": "path", "name": "player_id", "required": true, "dataType": "double" },
                player_year: { "in": "path", "name": "player_year", "required": true, "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new PlayerController();


            const promise = controller.getCategories.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/players/:team_year/:team_name',
        function(request: any, response: any, next: any) {
            const args = {
                team_year: { "in": "path", "name": "team_year", "required": true, "dataType": "string" },
                team_name: { "in": "path", "name": "team_name", "required": true, "dataType": "string" },
                name: { "in": "body-prop", "name": "name", "required": true, "dataType": "string" },
                height: { "in": "body-prop", "name": "height", "required": true, "dataType": "string" },
                height_inches: { "in": "body-prop", "name": "height_inches", "required": true, "dataType": "any" },
                hometown: { "in": "body-prop", "name": "hometown", "required": true, "dataType": "string" },
                last_school: { "in": "body-prop", "name": "last_school", "required": true, "dataType": "string" },
                pos: { "in": "body-prop", "name": "pos", "required": true, "dataType": "string" },
                num: { "in": "body-prop", "name": "num", "required": true, "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new PlayerController();


            const promise = controller.updatePlayerToIncludePosAndNum.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/players/:team_year/:team_name',
        function(request: any, response: any, next: any) {
            const args = {
                team_name: { "in": "path", "name": "team_name", "required": true, "dataType": "string" },
                team_year: { "in": "path", "name": "team_year", "required": true, "dataType": "string" },
                player_id: { "in": "body-prop", "name": "player_id", "required": true, "dataType": "double" },
                year_played: { "in": "body-prop", "name": "year_played", "required": true, "dataType": "double" },
                first_name: { "in": "body-prop", "name": "first_name", "required": true, "dataType": "string" },
                last_name: { "in": "body-prop", "name": "last_name", "required": true, "dataType": "string" },
                name: { "in": "body-prop", "name": "name", "required": true, "dataType": "string" },
                year: { "in": "body-prop", "name": "year", "required": true, "dataType": "string" },
                height: { "in": "body-prop", "name": "height", "required": true, "dataType": "string" },
                height_inches: { "in": "body-prop", "name": "height_inches", "required": true, "dataType": "any" },
                weight: { "in": "body-prop", "name": "weight", "required": true, "dataType": "any" },
                hometown: { "in": "body-prop", "name": "hometown", "required": true, "dataType": "string" },
                last_school: { "in": "body-prop", "name": "last_school", "required": true, "dataType": "string" },
                request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new PlayerController();


            const promise = controller.addPlayer.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/teams/:conference_year/:conference_name',
        function(request: any, response: any, next: any) {
            const args = {
                conference_year: { "in": "path", "name": "conference_year", "required": true, "dataType": "string" },
                conference_name: { "in": "path", "name": "conference_name", "required": true, "dataType": "string" },
                filter: { "in": "query", "name": "filter", "dataType": "array", "array": { "dataType": "string" } },
                limit: { "in": "query", "name": "limit", "dataType": "double" },
                offset: { "in": "query", "name": "offset", "dataType": "double" },
                sort: { "in": "query", "name": "sort", "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new TeamController();


            const promise = controller.getTeamsForConference.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/teams/:year',
        function(request: any, response: any, next: any) {
            const args = {
                year: { "in": "path", "name": "year", "required": true, "dataType": "string" },
                filter: { "in": "query", "name": "filter", "dataType": "array", "array": { "dataType": "string" } },
                limit: { "in": "query", "name": "limit", "dataType": "double" },
                offset: { "in": "query", "name": "offset", "dataType": "double" },
                sort: { "in": "query", "name": "sort", "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new TeamController();


            const promise = controller.getTeamsForYear.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/conferences/:conference_year',
        function(request: any, response: any, next: any) {
            const args = {
                conference_year: { "in": "path", "name": "conference_year", "required": true, "dataType": "string" },
                request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
                filter: { "in": "query", "name": "filter", "dataType": "array", "array": { "dataType": "string" } },
                limit: { "in": "query", "name": "limit", "dataType": "double" },
                offset: { "in": "query", "name": "offset", "dataType": "double" },
                sort: { "in": "query", "name": "sort", "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new ConferenceContoller();


            const promise = controller.getAllConferences.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/conferences/:conference_year/:conference_name',
        function(request: any, response: any, next: any) {
            const args = {
                conference_year: { "in": "path", "name": "conference_year", "required": true, "dataType": "string" },
                conference_name: { "in": "path", "name": "conference_name", "required": true, "dataType": "string" },
                request: { "in": "request", "name": "request", "required": true, "dataType": "object" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new ConferenceContoller();


            const promise = controller.getConference.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.post('/conferences/:conference_year/:conference_name',
        function(request: any, response: any, next: any) {
            const args = {
                conference_year: { "in": "path", "name": "conference_year", "required": true, "dataType": "string" },
                conference_name: { "in": "path", "name": "conference_name", "required": true, "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new ConferenceContoller();


            const promise = controller.updateConference.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/conferences/:conference_year',
        function(request: any, response: any, next: any) {
            const args = {
                conference_year: { "in": "path", "name": "conference_year", "required": true, "dataType": "string" },
                conference_name: { "in": "body-prop", "name": "conference_name", "required": true, "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new ConferenceContoller();


            const promise = controller.addConference.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/team/conferences/:team_year',
        function(request: any, response: any, next: any) {
            const args = {
                team_year: { "in": "path", "name": "team_year", "required": true, "dataType": "string" },
                conference_name: { "in": "body-prop", "name": "conference_name", "required": true, "dataType": "string" },
                team_name: { "in": "body-prop", "name": "team_name", "required": true, "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new ConferenceTeamController();


            const promise = controller.addTeamToConference.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/statistics/player/passing',
        function(request: any, response: any, next: any) {
            const args = {
                limit: { "in": "query", "name": "limit", "dataType": "double" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new StatisticsController();


            const promise = controller.getRankingForPassing.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/statistics/player/receiving',
        function(request: any, response: any, next: any) {
            const args = {
                limit: { "in": "query", "name": "limit", "dataType": "double" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new StatisticsController();


            const promise = controller.getRankingForReceiving.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.get('/statistics/player/rushing',
        function(request: any, response: any, next: any) {
            const args = {
                limit: { "in": "query", "name": "limit", "dataType": "double" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new StatisticsController();


            const promise = controller.getRankingForRushing.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/statistics/allPurposeRunning',
        function(request: any, response: any, next: any) {
            const args = {
                playerid: { "in": "body-prop", "name": "playerid", "required": true, "dataType": "double" },
                yearplayed: { "in": "body-prop", "name": "yearplayed", "required": true, "dataType": "string" },
                G: { "in": "body-prop", "name": "G", "required": true, "dataType": "double" },
                IntRet: { "in": "body-prop", "name": "IntRet", "required": true, "dataType": "double" },
                KickRet: { "in": "body-prop", "name": "KickRet", "required": true, "dataType": "double" },
                Plays: { "in": "body-prop", "name": "Plays", "required": true, "dataType": "double" },
                PuntRet: { "in": "body-prop", "name": "PuntRet", "required": true, "dataType": "double" },
                Recv: { "in": "body-prop", "name": "Recv", "required": true, "dataType": "double" },
                Rush: { "in": "body-prop", "name": "Rush", "required": true, "dataType": "double" },
                Split: { "in": "body-prop", "name": "Split", "required": true, "dataType": "string" },
                TotalYards: { "in": "body-prop", "name": "TotalYards", "required": true, "dataType": "double" },
                YardsG: { "in": "body-prop", "name": "YardsG", "required": true, "dataType": "double" },
                YardsPlay: { "in": "body-prop", "name": "YardsPlay", "required": true, "dataType": "double" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new StatisticsController();


            const promise = controller.addAllPurposeRunning.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/statistics/fumbleReturns',
        function(request: any, response: any, next: any) {
            const args = {
                playerid: { "in": "body-prop", "name": "playerid", "required": true, "dataType": "double" },
                yearplayed: { "in": "body-prop", "name": "yearplayed", "required": true, "dataType": "double" },
                FumRet: { "in": "body-prop", "name": "FumRet", "required": true, "dataType": "double" },
                G: { "in": "body-prop", "name": "G", "required": true, "dataType": "double" },
                Split: { "in": "body-prop", "name": "Split", "required": true, "dataType": "string" },
                TD: { "in": "body-prop", "name": "TD", "required": true, "dataType": "double" },
                Yards: { "in": "body-prop", "name": "Yards", "required": true, "dataType": "double" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new StatisticsController();


            const promise = controller.addFumbleReturns.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/statistics/interceptions',
        function(request: any, response: any, next: any) {
            const args = {
                playerid: { "in": "body-prop", "name": "playerid", "required": true, "dataType": "double" },
                yearplayed: { "in": "body-prop", "name": "yearplayed", "required": true, "dataType": "string" },
                G: { "in": "body-prop", "name": "G", "required": true, "dataType": "double" },
                Int: { "in": "body-prop", "name": "Int", "required": true, "dataType": "double" },
                IntG: { "in": "body-prop", "name": "IntG", "required": true, "dataType": "double" },
                Split: { "in": "body-prop", "name": "Split", "required": true, "dataType": "string" },
                TD: { "in": "body-prop", "name": "TD", "required": true, "dataType": "double" },
                Yards: { "in": "body-prop", "name": "Yards", "required": true, "dataType": "double" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new StatisticsController();


            const promise = controller.addInterception.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/statistics/kickoffReturn',
        function(request: any, response: any, next: any) {
            const args = {
                playerid: { "in": "body-prop", "name": "playerid", "required": true, "dataType": "double" },
                yearplayed: { "in": "body-prop", "name": "yearplayed", "required": true, "dataType": "string" },
                Avg: { "in": "body-prop", "name": "Avg", "required": true, "dataType": "double" },
                G: { "in": "body-prop", "name": "G", "required": true, "dataType": "double" },
                Ret: { "in": "body-prop", "name": "Ret", "required": true, "dataType": "double" },
                RetG: { "in": "body-prop", "name": "RetG", "required": true, "dataType": "double" },
                Split: { "in": "body-prop", "name": "Split", "required": true, "dataType": "string" },
                TD: { "in": "body-prop", "name": "TD", "required": true, "dataType": "double" },
                Yards: { "in": "body-prop", "name": "Yards", "required": true, "dataType": "double" },
                YardsG: { "in": "body-prop", "name": "YardsG", "required": true, "dataType": "double" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new StatisticsController();


            const promise = controller.addKickoffReturns.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/statistics/kickoffs',
        function(request: any, response: any, next: any) {
            const args = {
                playerid: { "in": "body-prop", "name": "playerid", "required": true, "dataType": "double" },
                yearplayed: { "in": "body-prop", "name": "yearplayed", "required": true, "dataType": "string" },
                Avg: { "in": "body-prop", "name": "Avg", "required": true, "dataType": "double" },
                G: { "in": "body-prop", "name": "G", "required": true, "dataType": "double" },
                Kickoffs: { "in": "body-prop", "name": "Kickoffs", "required": true, "dataType": "double" },
                Onside: { "in": "body-prop", "name": "Onside", "required": true, "dataType": "double" },
                OutOfBounds: { "in": "body-prop", "name": "OutOfBounds", "required": true, "dataType": "double" },
                Split: { "in": "body-prop", "name": "Split", "required": true, "dataType": "string" },
                Touchback: { "in": "body-prop", "name": "Touchback", "required": true, "dataType": "double" },
                Yards: { "in": "body-prop", "name": "Yards", "required": true, "dataType": "double" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new StatisticsController();


            const promise = controller.addKickoffStats.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/statistics/miscDefense',
        function(request: any, response: any, next: any) {
            const args = {
                playerid: { "in": "body-prop", "name": "playerid", "required": true, "dataType": "double" },
                yearplayed: { "in": "body-prop", "name": "yearplayed", "required": true, "dataType": "string" },
                FumblesForced: { "in": "body-prop", "name": "FumblesForced", "required": true, "dataType": "double" },
                G: { "in": "body-prop", "name": "G", "required": true, "dataType": "double" },
                KicksPuntsBlocked: { "in": "body-prop", "name": "KicksPuntsBlocked", "required": true, "dataType": "double" },
                PassesBrokenUp: { "in": "body-prop", "name": "PassesBrokenUp", "required": true, "dataType": "double" },
                QBHurries: { "in": "body-prop", "name": "QBHurries", "required": true, "dataType": "double" },
                Split: { "in": "body-prop", "name": "Split", "required": true, "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new StatisticsController();


            const promise = controller.addMistDefense.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/statistics/passing',
        function(request: any, response: any, next: any) {
            const args = {
                playerid: { "in": "body-prop", "name": "playerid", "required": true, "dataType": "double" },
                yearplayed: { "in": "body-prop", "name": "yearplayed", "required": true, "dataType": "string" },
                Att: { "in": "body-prop", "name": "Att", "required": true, "dataType": "double" },
                AttG: { "in": "body-prop", "name": "AttG", "required": true, "dataType": "double" },
                Comp: { "in": "body-prop", "name": "Comp", "required": true, "dataType": "double" },
                G: { "in": "body-prop", "name": "G", "required": true, "dataType": "double" },
                Int: { "in": "body-prop", "name": "Int", "required": true, "dataType": "double" },
                Pct: { "in": "body-prop", "name": "Pct", "required": true, "dataType": "double" },
                Rating: { "in": "body-prop", "name": "Rating", "required": true, "dataType": "double" },
                Split: { "in": "body-prop", "name": "Split", "required": true, "dataType": "string" },
                TD: { "in": "body-prop", "name": "TD", "required": true, "dataType": "double" },
                Yards: { "in": "body-prop", "name": "Yards", "required": true, "dataType": "double" },
                YardsAtt: { "in": "body-prop", "name": "YardsAtt", "required": true, "dataType": "double" },
                YardsG: { "in": "body-prop", "name": "YardsG", "required": true, "dataType": "double" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new StatisticsController();


            const promise = controller.addPassing.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/statistics/placeKicking',
        function(request: any, response: any, next: any) {
            const args = {
                playerid: { "in": "body-prop", "name": "playerid", "required": true, "dataType": "double" },
                yearplayed: { "in": "body-prop", "name": "yearplayed", "required": true, "dataType": "string" },
                Att: { "in": "body-prop", "name": "Att", "required": true, "dataType": "double" },
                AttG: { "in": "body-prop", "name": "AttG", "required": true, "dataType": "double" },
                ExtraPoint: { "in": "body-prop", "name": "ExtraPoint", "required": true, "dataType": "double" },
                FieldGoal: { "in": "body-prop", "name": "FieldGoal", "required": true, "dataType": "double" },
                G: { "in": "body-prop", "name": "G", "required": true, "dataType": "double" },
                Made: { "in": "body-prop", "name": "Made", "required": true, "dataType": "double" },
                MadeG: { "in": "body-prop", "name": "MadeG", "required": true, "dataType": "double" },
                Pct: { "in": "body-prop", "name": "Pct", "required": true, "dataType": "double" },
                Split: { "in": "body-prop", "name": "Split", "required": true, "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new StatisticsController();


            const promise = controller.addPlaceKicking.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/statistics/puntReturn',
        function(request: any, response: any, next: any) {
            const args = {
                playerid: { "in": "body-prop", "name": "playerid", "required": true, "dataType": "double" },
                yearplayed: { "in": "body-prop", "name": "yearplayed", "required": true, "dataType": "string" },
                Avg: { "in": "body-prop", "name": "Avg", "required": true, "dataType": "double" },
                G: { "in": "body-prop", "name": "G", "required": true, "dataType": "double" },
                Ret: { "in": "body-prop", "name": "Ret", "required": true, "dataType": "double" },
                RetG: { "in": "body-prop", "name": "RetG", "required": true, "dataType": "double" },
                Split: { "in": "body-prop", "name": "Split", "required": true, "dataType": "string" },
                TD: { "in": "body-prop", "name": "TD", "required": true, "dataType": "double" },
                Yards: { "in": "body-prop", "name": "Yards", "required": true, "dataType": "double" },
                YardsG: { "in": "body-prop", "name": "YardsG", "required": true, "dataType": "double" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new StatisticsController();


            const promise = controller.addPuntReturns.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/statistics/punting',
        function(request: any, response: any, next: any) {
            const args = {
                playerid: { "in": "body-prop", "name": "playerid", "required": true, "dataType": "double" },
                yearplayed: { "in": "body-prop", "name": "yearplayed", "required": true, "dataType": "string" },
                Avg: { "in": "body-prop", "name": "Avg", "required": true, "dataType": "double" },
                G: { "in": "body-prop", "name": "G", "required": true, "dataType": "double" },
                Punts: { "in": "body-prop", "name": "Punts", "required": true, "dataType": "double" },
                PuntsG: { "in": "body-prop", "name": "PuntsG", "required": true, "dataType": "double" },
                Split: { "in": "body-prop", "name": "Split", "required": true, "dataType": "string" },
                Yards: { "in": "body-prop", "name": "Yards", "required": true, "dataType": "double" },
                YardsG: { "in": "body-prop", "name": "YardsG", "required": true, "dataType": "double" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new StatisticsController();


            const promise = controller.addPunting.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/statistics/receiving',
        function(request: any, response: any, next: any) {
            const args = {
                playerid: { "in": "body-prop", "name": "playerid", "required": true, "dataType": "double" },
                yearplayed: { "in": "body-prop", "name": "yearplayed", "required": true, "dataType": "string" },
                Avg: { "in": "body-prop", "name": "Avg", "required": true, "dataType": "double" },
                G: { "in": "body-prop", "name": "G", "required": true, "dataType": "double" },
                Rec: { "in": "body-prop", "name": "Rec", "required": true, "dataType": "double" },
                RecG: { "in": "body-prop", "name": "RecG", "required": true, "dataType": "double" },
                Split: { "in": "body-prop", "name": "Split", "required": true, "dataType": "string" },
                TD: { "in": "body-prop", "name": "TD", "required": true, "dataType": "double" },
                Yards: { "in": "body-prop", "name": "Yards", "required": true, "dataType": "double" },
                YardsG: { "in": "body-prop", "name": "YardsG", "required": true, "dataType": "double" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new StatisticsController();


            const promise = controller.addReceiving.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/statistics/rushing',
        function(request: any, response: any, next: any) {
            const args = {
                playerid: { "in": "body-prop", "name": "playerid", "required": true, "dataType": "double" },
                yearplayed: { "in": "body-prop", "name": "yearplayed", "required": true, "dataType": "string" },
                Att: { "in": "body-prop", "name": "Att", "required": true, "dataType": "double" },
                AttG: { "in": "body-prop", "name": "AttG", "required": true, "dataType": "double" },
                Avg: { "in": "body-prop", "name": "Avg", "required": true, "dataType": "double" },
                G: { "in": "body-prop", "name": "G", "required": true, "dataType": "double" },
                Split: { "in": "body-prop", "name": "Split", "required": true, "dataType": "string" },
                TD: { "in": "body-prop", "name": "TD", "required": true, "dataType": "double" },
                Yards: { "in": "body-prop", "name": "Yards", "required": true, "dataType": "double" },
                YardsG: { "in": "body-prop", "name": "YardsG", "required": true, "dataType": "double" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new StatisticsController();


            const promise = controller.addRushing.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/statistics/sacks',
        function(request: any, response: any, next: any) {
            const args = {
                playerid: { "in": "body-prop", "name": "playerid", "required": true, "dataType": "double" },
                yearplayed: { "in": "body-prop", "name": "yearplayed", "required": true, "dataType": "string" },
                G: { "in": "body-prop", "name": "G", "required": true, "dataType": "double" },
                SackYards: { "in": "body-prop", "name": "SackYards", "required": true, "dataType": "double" },
                Sacks: { "in": "body-prop", "name": "Sacks", "required": true, "dataType": "double" },
                SacksG: { "in": "body-prop", "name": "SacksG", "required": true, "dataType": "double" },
                Split: { "in": "body-prop", "name": "Split", "required": true, "dataType": "string" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new StatisticsController();


            const promise = controller.addSacks.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/statistics/scoring',
        function(request: any, response: any, next: any) {
            const args = {
                playerid: { "in": "body-prop", "name": "playerid", "required": true, "dataType": "double" },
                yearplayed: { "in": "body-prop", "name": "yearplayed", "required": true, "dataType": "string" },
                XP: { "in": "body-prop", "name": "XP", "required": true, "dataType": "double" },
                FG: { "in": "body-prop", "name": "FG", "required": true, "dataType": "double" },
                G: { "in": "body-prop", "name": "G", "required": true, "dataType": "double" },
                Points: { "in": "body-prop", "name": "Points", "required": true, "dataType": "double" },
                PointsG: { "in": "body-prop", "name": "PointsG", "required": true, "dataType": "double" },
                Safety: { "in": "body-prop", "name": "Safety", "required": true, "dataType": "double" },
                Split: { "in": "body-prop", "name": "Split", "required": true, "dataType": "string" },
                TD: { "in": "body-prop", "name": "TD", "required": true, "dataType": "double" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new StatisticsController();


            const promise = controller.addScoring.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/statistics/tacklesForLoss',
        function(request: any, response: any, next: any) {
            const args = {
                playerid: { "in": "body-prop", "name": "playerid", "required": true, "dataType": "double" },
                yearplayed: { "in": "body-prop", "name": "yearplayed", "required": true, "dataType": "string" },
                G: { "in": "body-prop", "name": "G", "required": true, "dataType": "double" },
                Split: { "in": "body-prop", "name": "Split", "required": true, "dataType": "string" },
                TFL: { "in": "body-prop", "name": "TFL", "required": true, "dataType": "double" },
                TFLYards: { "in": "body-prop", "name": "TFLYards", "required": true, "dataType": "double" },
                TFLG: { "in": "body-prop", "name": "TFLG", "required": true, "dataType": "double" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new StatisticsController();


            const promise = controller.addTacklesForLoss.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/statistics/tackles',
        function(request: any, response: any, next: any) {
            const args = {
                playerid: { "in": "body-prop", "name": "playerid", "required": true, "dataType": "double" },
                yearplayed: { "in": "body-prop", "name": "yearplayed", "required": true, "dataType": "string" },
                Assisted: { "in": "body-prop", "name": "Assisted", "required": true, "dataType": "double" },
                G: { "in": "body-prop", "name": "G", "required": true, "dataType": "double" },
                Solo: { "in": "body-prop", "name": "Solo", "required": true, "dataType": "double" },
                Split: { "in": "body-prop", "name": "Split", "required": true, "dataType": "string" },
                Total: { "in": "body-prop", "name": "Total", "required": true, "dataType": "double" },
                TotalG: { "in": "body-prop", "name": "TotalG", "required": true, "dataType": "double" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new StatisticsController();


            const promise = controller.addTackles.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/statistics/totalOffense',
        function(request: any, response: any, next: any) {
            const args = {
                playerid: { "in": "body-prop", "name": "playerid", "required": true, "dataType": "double" },
                yearplayed: { "in": "body-prop", "name": "yearplayed", "required": true, "dataType": "string" },
                G: { "in": "body-prop", "name": "G", "required": true, "dataType": "double" },
                PassYards: { "in": "body-prop", "name": "PassYards", "required": true, "dataType": "double" },
                Plays: { "in": "body-prop", "name": "Plays", "required": true, "dataType": "double" },
                RushYards: { "in": "body-prop", "name": "RushYards", "required": true, "dataType": "double" },
                Split: { "in": "body-prop", "name": "Split", "required": true, "dataType": "string" },
                TotalYards: { "in": "body-prop", "name": "TotalYards", "required": true, "dataType": "double" },
                YardsG: { "in": "body-prop", "name": "YardsG", "required": true, "dataType": "double" },
                YardsPlay: { "in": "body-prop", "name": "YardsPlay", "required": true, "dataType": "double" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new StatisticsController();


            const promise = controller.addTotalOffense.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    app.put('/statistics/yardsFromScrimmage',
        function(request: any, response: any, next: any) {
            const args = {
                playerid: { "in": "body-prop", "name": "playerid", "required": true, "dataType": "double" },
                yearplayed: { "in": "body-prop", "name": "yearplayed", "required": true, "dataType": "string" },
                G: { "in": "body-prop", "name": "G", "required": true, "dataType": "double" },
                Plays: { "in": "body-prop", "name": "Plays", "required": true, "dataType": "double" },
                RecvYards: { "in": "body-prop", "name": "RecvYards", "required": true, "dataType": "double" },
                RushYards: { "in": "body-prop", "name": "RushYards", "required": true, "dataType": "double" },
                Split: { "in": "body-prop", "name": "Split", "required": true, "dataType": "string" },
                TD: { "in": "body-prop", "name": "TD", "required": true, "dataType": "double" },
                TotalYards: { "in": "body-prop", "name": "TotalYards", "required": true, "dataType": "double" },
                YardsG: { "in": "body-prop", "name": "YardsG", "required": true, "dataType": "double" },
                YardsPlay: { "in": "body-prop", "name": "YardsPlay", "required": true, "dataType": "double" },
            };

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = getValidatedArgs(args, request);
            } catch (err) {
                return next(err);
            }

            const controller = new StatisticsController();


            const promise = controller.addYardsFromScrimmage.apply(controller, validatedArgs as any);
            promiseHandler(controller, promise, response, next);
        });
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function isController(object: any): object is Controller {
        return 'getHeaders' in object && 'getStatus' in object && 'setStatus' in object;
    }

    function promiseHandler(controllerObj: any, promise: any, response: any, next: any) {
        return Promise.resolve(promise)
            .then((data: any) => {
                let statusCode;
                if (isController(controllerObj)) {
                    const headers = controllerObj.getHeaders();
                    Object.keys(headers).forEach((name: string) => {
                        response.set(name, headers[name]);
                    });

                    statusCode = controllerObj.getStatus();
                }

                // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

                if (data || data === false) { // === false allows boolean result
                    response.status(statusCode || 200).json(data);
                } else {
                    response.status(statusCode || 204).end();
                }
            })
            .catch((error: any) => next(error));
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function getValidatedArgs(args: any, request: any): any[] {
        const fieldErrors: FieldErrors = {};
        const values = Object.keys(args).map((key) => {
            const name = args[key].name;
            switch (args[key].in) {
                case 'request':
                    return request;
                case 'query':
                    return validationService.ValidateParam(args[key], request.query[name], name, fieldErrors, undefined, { "specVersion": 2 });
                case 'path':
                    return validationService.ValidateParam(args[key], request.params[name], name, fieldErrors, undefined, { "specVersion": 2 });
                case 'header':
                    return validationService.ValidateParam(args[key], request.header(name), name, fieldErrors, undefined, { "specVersion": 2 });
                case 'body':
                    return validationService.ValidateParam(args[key], request.body, name, fieldErrors, name + '.', { "specVersion": 2 });
                case 'body-prop':
                    return validationService.ValidateParam(args[key], request.body[name], name, fieldErrors, 'body.', { "specVersion": 2 });
            }
        });

        if (Object.keys(fieldErrors).length > 0) {
            throw new ValidateError(fieldErrors, '');
        }
        return values;
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
