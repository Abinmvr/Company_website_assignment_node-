const util =require('util');
const mysql = require('mysql');
const config =require('../../config.js');
function createdb(){
      const dbconfig = {
                user:config.USER,
                host:config.HOST,
                password:config.PASSWORD,
                database:config.DATABASE
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

