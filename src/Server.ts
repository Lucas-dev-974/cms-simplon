import * as http from "http";
import { Router } from "./routes/Router";

export class Server{
    static instance:Server;
    ServerAddress:any = process.env.SADDRESSE ||'localhost';
    ServerPort:any    = process.env.SPORT     ||3000;

    constructor(){
    }

    static GetInstance(){
        if(!this.instance){
            this.instance = new Server()
        }
        return this.instance
    }

    private InitServ(){
        let server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {
            this.checkRoute(request, response)
        })

        server.listen(this.ServerPort, this.ServerAddress, ()=>{
            console.log(`Server en écoute sur ${this.ServerAddress}:${this.ServerPort}`);
        })
    }

    public static StartServer(){
        this.GetInstance().InitServ()
    }

    checkRoute(req:any, res:any){
        let route = Router.getRoutes().filter(route => 
            route.url === req.url && 
            route.method == req.method
        )

        if(route && route.length > 0){
            let rt:any = route.pop()
            rt.callback(req, res)
        }else{
            return  Router.getRoutes().find((route:any) => route.url == "404")?.callback(req, res)
        }
    }
}