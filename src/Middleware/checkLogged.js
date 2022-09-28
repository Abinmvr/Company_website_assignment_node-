const jwt = require('jsonwebtoken');
const checkLogged=async(req,res,next)=>{
    const authHeader =req.headers['authorization'];
    console.log('auth',authHeader);
    if(authHeader===undefined){
        console.log('need token');
    }
    else{
        try{
            const logg=jwt.verify(authHeader,'secret_token');
            // console.log('lo',logg);
            next();
            }
        catch(e){
            console.log(e);
        }
    }
    
}
module.exports ={checkLogged};
 