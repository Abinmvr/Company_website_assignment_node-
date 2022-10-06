const {createdb} =require('../../library/db_config');

const get_achievements_model = async()=>{
    const db = await createdb();
    try{
        const achievements_data=await db.query("SELECT id,title,image,details FROM achievements");
        return {'data':achievements_data};  
    }
    catch(e){
            return {'error':e};     
    }
    finally{
            await db.close();
    }
}

const get_achievements_model_ById= async(id)=>{
    const db = await createdb();
    try{
        const achievements_data=await db.query("SELECT id,title,image,details FROM achievements WHERE id=?",[id]);
        return {'data':achievements_data};  
    }
    catch(e){
            return {'error':e};     
    }
    finally{
            await db.close();
    }
}

const add_Achieve_model = async(addData)=>{
    const db = await createdb();
    try{
        const add_query=("INSERT INTO achievements(title,image,details)VALUES(?,?,?)");
        await db.query(add_query,[addData.title,addData.image,addData.details]);
        return 'success';
    }
    catch(err){
            throw  err;
    }
    finally{
        await db.close();
    }
}

const delete_achieve_model = async(id)=>{
    const db = await createdb();
    try{
        await db.query("DELETE FROM achievements WHERE id=?",[id]);
        return 'success';  
    }
    catch(e){
            return {'error':e};     
    }
    finally{
            await db.close();
    }
}

const update_achievements_model = async(editData)=>{
        const db = await createdb();
        try{
            const update_query=("UPDATE achievements SET title = ?, image =?, details =? WHERE id =?");
            await db.query(update_query,[editData.title,editData.image,editData.details,editData.id]);

            return 'success';
        }
        catch(err){
                throw  err;
        }
        finally{
            await db.close();
        }
    }
module.exports = {get_achievements_model,add_Achieve_model,delete_achieve_model,get_achievements_model_ById,update_achievements_model};