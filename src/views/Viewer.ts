const ejs = require('ejs')
import * as fs from 'fs';
import * as path from 'path';

export class Viewer{
    private constructor(){}

    public static getView(view:string, res:any){
        let htmlContent = fs.readFileSync(path.join(__dirname, `/${view}`), 'utf8')
        let render      = ejs.render(htmlContent, {filename: view, data:'test'})
        res.end(render)
    }
}