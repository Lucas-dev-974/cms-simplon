import * as process from "process";
import mysql from "mysql2";
import * as dotenv from "dotenv";

dotenv.config();

class Database{
    private static connection(): mysql.Connection{
        return mysql.createConnection({
            database: process.env.MYSQL_DATABASE,
            host:     process.env.MYSQL_HOST,
            user:     process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD
        });
    }

    public static  Query(sqlQuery: string){
        const connection = this.connection();
        return new Promise((resolve, reject) => {
            connection.query(sqlQuery, (err, rows, fields) => {
                if(err) return reject(err);
                console.log(rows);
                resolve(rows);
            })
        })
    }
}

export default Database;