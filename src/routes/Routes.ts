import { Router } from './Router'
import { Controller } from '../controller/ViewController';
import { ArtcileController } from '../controller/ArticleController';

export class Routes{
    static build(){
        Router.get('/',     ArtcileController.getArticles)
        Router.get('/home', Controller.home)
        Router.get('/404',  Controller.p404 )
    }
}