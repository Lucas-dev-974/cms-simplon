"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes_1 = require("./routes/Routes");
var Server_1 = require("./Server");
Routes_1.Routes.build();
Server_1.Server.StartServer();
