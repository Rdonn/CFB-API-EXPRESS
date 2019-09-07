import {PlayerController} from "./controller/PlayerController";
import { TeamController } from "./controller/TeamController";
import { ConferenceContoller } from "./controller/ConferenceController";

export const PlayerRoutes = [{
    method: "get",
    route: "/players",
    controller: PlayerController,
    action: "all"
}, {
    method: "get",
    route: "/players/:player_id",
    controller: PlayerController,
    action: "one"
}, {
    method: "post",
    route: "/players",
    controller: PlayerController,
    action: "save"
}, {
    method: "delete",
    route: "/players/:player_id",
    controller: PlayerController,
    action: "remove"
}];

export const TeamRoutes = [{
    method: "get", 
    route: "/:year/teams", 
    controller: TeamController, 
    action: "all"
}, {
    method: "get", 
    route: "/:year/teams/:team_id",
    controller: TeamController, 
    action: "one"

}, {
    method: "post", 
    route: "/teams",
    controller: TeamController, 
    action: "save"
}, {
    method: "delete", 
    route: "/:year/teams/:team_id", 
    controller: TeamController, 
    action: "remove"
}]

export const ConferenceRoutes = [{
    method: "get", 
    route: "/:year/conferences", 
    controller: TeamController, 
    action: "all"
}, {
    method: "get", 
    route: "/:year/conferences/:conference_id",
    controller: TeamController, 
    action: "one"

}, {
    method: "post", 
    route: "/conferences",
    controller: TeamController, 
    action: "save"
}, {
    method: "delete", 
    route: "/:year/conferences/:conferences_id"
}
    

]