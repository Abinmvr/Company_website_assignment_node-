const util =require('util');
const mysql = require('mysql');
function createdb(){
      const dbconfig = {
                user:"root",
                host:"localhost",
                password:"password",
                database:"company_website"
       };
    const connection =mysql.createConnection(dbconfig);
    return {
        query( sql, args ) {
          return util.promisify( connection.query )
            .call( connection, sql, args );
        },
        close() {
          return util.promisify( connection.end ).call( connection );
        }
      };
    } 
module.exports ={createdb};

