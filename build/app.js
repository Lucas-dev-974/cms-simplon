"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes_1 = require("./routes/Routes");
var Server_1 = require("./Server");
var orm_1 = require("./ORM/orm");
var orm = new orm_1.ORM();
Routes_1.Routes.build();
Server_1.Server.StartServer();
