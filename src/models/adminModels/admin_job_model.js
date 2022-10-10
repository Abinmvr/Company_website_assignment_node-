const {createdb} =require('../../library/db_config');

const get_jobs_model= async()=>{
    const db = await createdb();
    try{
        const job_data=await db.query(`SELECT job.id,location,experience_in_years,position,description,expire_date
        FROM job
        JOIN positions ON position_id = positions.id`);
        return job_data;
    }
    catch(e){
            console.log(e);
            return e;     
    }
    finally{
            await db.close();
    }
}
const get_positions_model= async()=>{
    const db = await createdb();
    try{
        const job_position=await db.query(`SELECT id,position FROM positions`);
        return job_position;
    }
    catch(e){
            console.log(e);
            return e;     
    }
    finally{
            await db.close();
    }
}

const get_jobs_model_ById= async(id)=>{
    const db = await createdb();
    try{
        const job_data=await db.query(`SELECT job.id,location,experience_in_years,position,description,expire_date
        FROM job 
        JOIN positions ON position_id = positions.id WHERE job.id =? `,[id]);
        console.log(job_data);
        return {'data':job_data};  
        
    }
    catch(e){
            return {'error':e};     
    }
    finally{
            await db.close();
    }
}

const add_job_model = async(addData)=>{
    const db = await createdb();
    try{
        const add_query=("INSERT INTO job(position_id,location,description,experience_in_years,expire_date)VALUES(?,?,?,?,?)");
        await db.query(add_query,[addData.position_id ,addData.location,addData.details,addData.experience,addData.expire]);
        return 'success';
    }
    catch(err){
            throw  err;
    }
    finally{
        await db.close();
    }
}

const delete_job_model = async(id)=>{
    const db = await createdb();
    try{
        await db.query("DELETE FROM job WHERE id=?",[id]);
        return 'success';  
    }
    catch(e){
            return {'error':e};     
    }
    finally{
            await db.close();
    }
}

const update_job_model = async(editData)=>{
        const db = await createdb();
        try{
            const update_query=(`UPDATE job SET location =?,experience_in_years=?,description=?,expire_date =? WHERE job.id =?`);
            await db.query(update_query,[editData.location,editData.experience,editData.details,editData.expire,editData.id]);

            return 'success';
        }
        catch(err){
                console.log("model",err);
                throw  err;
        }
        finally{
            await db.close();
        }
    }
    module.exports = {get_jobs_model,get_jobs_model_ById,update_job_model,get_positions_model,add_job_model,delete_job_model};