"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Routes_1 = require("./routes/Routes");
var Server_1 = require("./Server");
var db_configuration_1 = __importDefault(require("./database/db_configuration"));
var database = new db_configuration_1.default();
Routes_1.Routes.build();
Server_1.Server.StartServer();
