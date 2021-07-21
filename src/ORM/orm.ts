var mysql = require('mysql');

export class ORM{
    DBhost:any = process.env.DBhost || 'localhost'
    DBuser:any = process.env.DBuser || 'root'
    DBpassword:any = process.env.DBpassword || ''
    DBdatabase:any = process.env.DBdatabase || 'cms'
    
    connexion:any 

    constructor(){ 
        this.connexion = mysql.createConnection({
            host: this.DBhost, 
            user: this.DBuser, 
            password: this.DBpassword, 
        });

        let sql = 

        this.connexion.connect(function(err:any){
            if(err) return { success: false, error: err}
            else{

            }
        })
        

        this.connexion.end()
            
    }
}