import { ServerResponse } from "http";
import { Viewer } from "../views/Viewer";

export class Response{
    content:any 
    header:any
    
    constructor(public response: ServerResponse){
        this.response = response
    }

    setHeader(data:any){
        if(!(data instanceof Viewer)) this.response.setHeader('Content-type', 'application/json')
    }

    public emit(data: any){
        this.setHeader(data)

        if(data instanceof Viewer) data = data.getView()
        else data = JSON.stringify(data) 
        
        this.response.end(data)
    }
}