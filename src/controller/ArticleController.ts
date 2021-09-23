import Article from "../database/model/Article";
import { Request } from "../Server/Request";
import { Viewer } from "../views/Viewer";

export class ArtcileController{
    public static async getArticles(select:string){ 
        const article:any = {};

        await Article.findAll({
            "select": ['id', 'title', 'content'],
            'where': [['id', 1]]
        }).then((data) => {
            console.log('in then');
            console.log(data);
        })
        
        return Article.findAll({
            "select": ['id', 'title', 'content'],
            'where': [['id', 1]]
        });
    }

    public static async getOneArticle(request: Request){
        
    }
}