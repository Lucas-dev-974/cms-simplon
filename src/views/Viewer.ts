const ejs = require('ejs')
import * as fs from 'fs';
import * as path from 'path';

export class Viewer{
    
    constructor(private view_path:string, private data:any){}

    public getView(){
        let htmlContent = fs.readFileSync(path.join(__dirname, `/${this.view_path}`), 'utf8')
        return ejs.render(htmlContent, {filename: this.view_path, data: this.data})
    }

    static make(view_path:string, data:any = null){
        return new Viewer(view_path, data)
    }
}