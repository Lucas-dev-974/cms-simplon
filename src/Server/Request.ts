import { IncomingMessage } from "http";

export class Request{
    url:string
    method:string

    public constructor(request: any){
        // this.IncommingMessage = request
        this.url = request.url
        this.method = request.method
    }

    
}