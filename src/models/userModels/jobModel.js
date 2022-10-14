const {createdb} =require('../../library/db_config');

const jobs= async()=>{
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

const apply_job_model = async(addData)=>{
    const db = await createdb();
    try{
        const add_query=("INSERT INTO applicant(job_id,first_name,email,experience_in_years,resume)VALUES(?,?,?,?,?)");
        await db.query(add_query,[addData.job_id ,addData.name,addData.email,addData.experience,addData.resumes]);
        return 'success';
    }
    catch(err){
            // throw  err;
            return  err;
    }
    finally{
        await db.close();
    }
}

const get_apply_model_ById= async(id)=>{
    const db = await createdb();
    try{
        const apply_data=await db.query(`SELECT job_id,first_name,email,experience_in_years,resume
        FROM applicant WHERE id =? `,[id]);
        
        return {'data':apply_data};  
        
    }
    catch(e){
            return {'error':e};     
    }
    finally{
            await db.close();
    }
}
module.exports = {jobs,apply_job_model,get_apply_model_ById};