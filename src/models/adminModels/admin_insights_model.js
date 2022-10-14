const {createdb} =require('../../library/db_config');

const get_insights_model = async()=>{
    const db = await createdb();
    try{
        const insight_data=await db.query("SELECT id,title,image,details FROM insights");
        return insight_data;  
    }
    catch(e){
            return e;     
    }
    finally{
            await db.close();
    }
}

const add_insights_model = async(addData)=>{
    const db = await createdb();
    try{
        const add_query=("INSERT INTO insights(title,image,details)VALUES(?,?,?)");
        await db.query(add_query,[addData.title,addData.image,addData.details]);
        return 'success';
    }
    catch(err){
            // throw  err;
            return false;
    }
    finally{
        await db.close();
    }
}

const delete_insights_model = async(id)=>{
    const db = await createdb();
    try{
        await db.query("DELETE FROM insights WHERE id=?",[id]);
        return 'success';  
    }
    catch(e){
            return {'error':e};     
    }
    finally{
            await db.close();
    }
}

const get_insights_model_ById= async(id)=>{
    const db = await createdb();
    try{
        const insights_data=await db.query("SELECT id,title,image,details FROM insights WHERE id=?",[id]);
        return {'data':insights_data};  
    }
    catch(e){
            return {'error':e};     
    }
    finally{
            await db.close();
    }
}

const update_insights_model = async(editData)=>{
        const db = await createdb();
        try{
            const update_query = "UPDATE insights SET title =?,details =?"
            const update_id =" WHERE id =?"
            const image_query =",image =?"
            let data, update_table;
            if(editData.image!==''){
                update_table=update_query+image_query+update_id;
                data =[editData.title,editData.details,editData.image,editData.id];
            }
            else{
                update_table=update_query+update_id;
                data =[editData.title,editData.details,editData.id]
            }
            await db.query(update_table,data);
            return 'success';
        }
        catch(err){
                // throw  err;
                return false;
        }
        finally{
            await db.close();
        }
    }
module.exports = {get_insights_model,add_insights_model,delete_insights_model,get_insights_model_ById,update_insights_model};