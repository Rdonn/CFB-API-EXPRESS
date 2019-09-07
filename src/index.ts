import "reflect-metadata";
import {createConnection} from "typeorm";
import express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {PlayerRoutes, TeamRoutes, ConferenceRoutes} from "./routes";
import { ConferenceContoller } from "./controller/ConferenceController";
createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());

    const allRoutes = [PlayerRoutes, 
                       TeamRoutes, 
                       ConferenceRoutes]

    // register all of the routes. 
    allRoutes.forEach(Routes => {
        Routes.forEach(route => {
            (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
                const result = (new (route.controller as any))[route.action](req, res, next);
                if (result instanceof Promise) {
                    result.then(result => result !== null && result !== undefined ? res.send(result) : res.send('success'));

                } else if (result !== null && result !== undefined) {
                    res.json(result);
                }
            });
        });
    })

    // setup express app here
    // ...

    // start express server
    app.listen(3000);

    
    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

}).catch(error => console.log(error));
