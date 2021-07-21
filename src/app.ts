import { Routes } from "./routes/Routes"
import {Server} from "./Server"
import { ORM } from "./ORM/orm"

let orm = new ORM()
Routes.build()
Server.StartServer()