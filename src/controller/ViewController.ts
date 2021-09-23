import { Viewer } from "../views/Viewer";

export class Controller {    
    private constructor() { }

    public static showMainPage = ()=>{
        return Viewer.make('home.ejs', 'Lucas')
    }

    public static home = ()=>{
        return { toto: "toto"}
    }

    public static p404 = ()=>{
        return Viewer.make('404.ejs')
    }
    
}

