const {createdb} =require('../../library/db_config');

const get_applicant_model= async()=>{
    const db = await createdb();
    try{
        const applicant_data=await db.query(`SELECT applicant.id , position AS job_title, first_name AS name, email,resume,applicant.experience_in_years as experience
            FROM applicant
            JOIN job ON applicant.job_id = job.id
            JOIN positions ON position_id = positions.id`);
        return applicant_data;
    }
    catch(e){
            console.log(e);
            return e;     
    }
    finally{
            await db.close();
    }
}

const delete_applicant_model = async(id)=>{
    const db = await createdb();
    try{
        await db.query("DELETE FROM applicant WHERE id=?",[id]);
        return 'success';  
    }
    catch(e){
            return {'error':e};     
    }
    finally{
            await db.close();
    }
}


module.exports = {get_applicant_model,delete_applicant_model }