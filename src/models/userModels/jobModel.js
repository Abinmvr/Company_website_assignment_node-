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
module.exports = {jobs};