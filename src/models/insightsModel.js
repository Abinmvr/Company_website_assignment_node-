const {createdb} =require('../library/db_config');
const insights = async()=>{
    const db = await createdb();
    try{
        const insight_data=await db.query("SELECT title,image,details FROM insights");
        return insight_data;  
    }
    catch(e){
            return e;     
    }
    finally{
            await db.close();
    }
}
module.exports = {insights};