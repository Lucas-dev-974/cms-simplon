import { Routes } from "./routes/Routes"
import {Server} from "./Server"
import Database  from "./database/db_configuration"

let database = new Database()

Routes.build()
Server.StartServer()