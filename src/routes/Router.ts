import { Route } from "./Route";


export class Router{
    static instance:Router;
    routes:Route[] = []

    constructor(){
    }

    static get(url: string, callback: any){
        const instance = this.getInstance()
        instance.add('GET', url, callback)
    }

    public add(method:string, url:string, callback:any){
        this.routes.push(new Route(method, url, callback))
    }
    
    private static getInstance(){
       if(!this.instance){
           this.instance = new Router()
        }

        return this.instance
    }

    static getRoutes(){
        return this.getInstance().routes
    }
}