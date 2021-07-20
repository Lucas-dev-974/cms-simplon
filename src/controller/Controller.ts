import { Viewer } from "../views/Viewer";

import {IncomingMessage, ServerResponse} from "http";

export class Controller {    
    private constructor() { }

    public static showMainPage = (req: IncomingMessage, res:ServerResponse)=>{
        Viewer.getView('home.ejs', res)
    }

    public static home = (req: IncomingMessage, res:ServerResponse)=>{
        Viewer.getView('home.ejs', res)
    }

    public static p404 = (req: IncomingMessage, res:ServerResponse)=>{
        Viewer.getView('404.ejs', res)
    }
}

