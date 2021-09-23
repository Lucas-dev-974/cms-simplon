import { RouteInterface } from "../Interfaces/RouteInterface";
export class Route implements RouteInterface{ constructor(public method: string, public url: string, public callback: any){}}