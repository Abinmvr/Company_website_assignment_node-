const jwt = require('jsonwebtoken');
const checkLogged=async(req,res,next)=>{
    const authHeader =req.headers['authorization'];
    console.log('auth',authHeader);
    if(authHeader===undefined){
        console.log('need token');
        res.status(401).send({success:false, error:'Token Missing ...'});
    }
    else{
        try{
            const logg=jwt.verify(authHeader,'secret_token',(err)=>{
                if (err){
                    throw err;
                }
            })
            next();
            }
        catch(e){
            res.status(403).send({success:false,error:'Invalid token...'})
            console.log(e);
        }
    }
    
}
module.exports ={checkLogged};
 