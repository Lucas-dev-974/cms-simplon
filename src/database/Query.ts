import Database from "./db_configuration";
import { FieldInterface } from "../Interfaces/FieldInterface";

class Query{
    private  table: string;
    private fields: Array<FieldInterface> = [];
    private selectedFields: string = "";
    private where_condition: string = "";
    private update_condition: string = "";

    constructor(table: string, fields: Array<FieldInterface>){
        this.table  = table;
        this.fields = fields;
    }

    select(fields: Array<any>){
        console.log('log in select: ', fields);
        
        if(fields.length > 1){
            let fields_string = ""
            for(let i = 0; i < fields.length; i++){
                if((i + 1) !== fields.length)   fields_string = fields_string + `${fields[i]}, `
                else fields_string = fields_string + `${fields[i]}`
            }
            this.selectedFields = fields_string
        }else{
            this.selectedFields = fields[0]
        }
        return this;
    }

    where(args: any){
        if(Array.isArray(args)){
            if(args.length > 0){
                let options:string = " WHERE ";
                for(let i = 0; i < args.length; i++){
                    if((i + 1) < args.length){ // Si il y a d'autre options a ajouter on rajoute AND 
                        options = options + args[i][0] + ' = "' + args[i][1] + '" AND ';
                    }else{
                        options += args[i][0] + ' = "' + args[i][1] + '" ';
                    }
                }
                this.where_condition = options
            }
        }
        return this
    }

    from(tablename: string){
        this.table = tablename;
        return this;
    }

    buildQuery(){
        let query:string = "";
        console.log(this.where_condition);
        
        console.log(this.selectedFields);
        
        if(this.selectedFields !== ""){
            console.log("log where_condition.lengh: ", this.where_condition.length);
            
            query = `SELECT ${this.selectedFields} FROM ${this.table} `;
            if(this.where_condition.length > 0) query = query + this.where_condition
            // if(this.where_condition !== "") 
        }
        query = query + ';'
        console.log(query);
        
        return query; 
    }
}

export default Query