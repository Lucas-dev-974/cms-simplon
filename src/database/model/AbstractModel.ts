import { FieldInterface } from "../../Interfaces/FieldInterface";
import Query from "../Query";
import Database from '../db_configuration';
import { lchown } from "fs";

abstract class AbstractModel{
    table: string;
    fields: Array<FieldInterface>;
    query: Query;

    fieldsSelection: any = [];

    constructor(table: string, fields: Array<FieldInterface>){
        this.table = table;
        this.fields = fields
        this.query  = new Query(this.table, this.fields);
    }

    public async findAll(data: any){
        let queryResponse:string = ""
        if(!data){
            queryResponse =  this.query.select(this.fieldsSelection).from(this.table).buildQuery();
        }else{
            let where     = (data.where)  ? data.where : null;
            let selection = (data.select) ? data.select : null;
            
            if(where !== null && selection !== null){
                queryResponse =  this.query.select(selection).from(this.table).where(where).buildQuery();
            }else if(where !== null && selection === null){
                queryResponse =  this.query.select(this.fieldsSelection).from(this.table).select(selection).where(where).buildQuery();
            }
        }
        return await this.ExecuteQuery(queryResponse);
    }

    public find(id: Number){
        
    }

    public selectFields(){
        this.fields
    }

    private async ExecuteQuery(query:string){
        try{
            const data = await Database.Query(query);
        }catch(error){
            console.log(error);
        }
    }
}

export default AbstractModel;