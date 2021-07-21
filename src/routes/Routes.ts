import { Router } from './Router'
import { Controller } from '../controller/Controller';

export class Routes{
    static build(){
        Router.get('/',     Controller.showMainPage)
        Router.get('/home', Controller.home)
        Router.get('/404',  Controller.p404 )
    }
}