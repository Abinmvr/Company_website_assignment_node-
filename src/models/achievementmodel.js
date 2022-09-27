const {createdb} =require('../library/db_config');
const achievements = async()=>{
    const db = await createdb();
    try{
        const achievements_data=await db.query("SELECT title,image,details FROM achievements");
        return achievements_data;  
    }
    catch(e){
            return e;     
    }
    finally{
            await db.close();
    }
}
module.exports = {achievements};