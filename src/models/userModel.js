const {createdb} = require('../library/db_config');
const signup = async(signupdata)=>{
    const db = await createdb();
    try{
        const sign_query=("INSERT INTO user(first_name,email,password)VALUES(?,?,?)");
        const sign_data = await db.query(sign_query,[signupdata.username,signupdata.email,signupdata.password]);
        return {'values':sign_data};
    }
    catch(e){ 

            console.log(e);
            return {'err':e}; 

    }
    finally{
        await db.close();
    }
}
const login = async(logdata)=>{
    const db =await createdb();
    try{
        const log_query=("SELECT * FROM user WHERE first_name=? AND password = ?")
        const log_data=await db.query(log_query,[logdata.username,logdata.password]);
        return {'values':log_data};
    }
    catch(e){
            return {'err':e};     
    }
    finally{
            await db.close();
    }
}
module.exports ={signup,login};

