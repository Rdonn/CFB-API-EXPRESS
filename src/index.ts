import "reflect-metadata";
import {createConnection} from "typeorm";
import express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors"; 
import {Request, Response} from "express";
import {PlayerRoutes, TeamRoutes, ConferenceRoutes} from "./routes";
import { ConferenceContoller } from "./controller/ConferenceController";
import { RegisterRoutes } from "./routes/routes";
import * as swaggerUI from 'swagger-ui-express'; 
import { ConferenceTeamController } from "./controller/ConferenceTeamController";
import { TeamController } from "./controller/TeamController";
import { StatisticsController } from "./controller/StatisticsController";
createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());
    var cors = require('cors'); 
    app.use(cors()); 
    console.log("here");
    
    
    
    // start express server
    RegisterRoutes(app); 

    try{
        const swaggerDocument = require('../swagger.json')
        app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
    } catch(err){
        console.log('unable to read swagger json', err);
        
    }
    app._router.stack          // registered routes
    .filter(r => r.route)    // take out all the middleware
    .map(r => console.log(r.route.path))
    app.listen(3000);

    
    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

}).catch(error => console.log(error));
