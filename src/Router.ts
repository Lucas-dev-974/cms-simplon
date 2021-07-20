type Routes = {
    path: string,
    file_path: string,
    name: string
}

export class Router{ 
    routes: Routes[]

    constructor(routes: Routes[]){
        this.routes = routes
        console.log(this.routes);
        
    }

    add_Route(routes: Routes){
       this.routes.push(routes)
    }

    filter_name(obj: any, name:string){
        if(obj.name === name){
            return true
        }else{
            false
        }
    }

}
