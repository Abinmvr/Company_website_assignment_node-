const express = require('express');
const app = express();
// const cors =require('cors');

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",'Origin,X-Required-With,Content-Type');
    res.header("Access-Control-Allow-Methods",'*');
    res.header("Access-Control-Allow-Credentials",true);
    next();
});

app.use(express.json());
// app.use(cors());

const userRoutes = require('./routes/userRoutes');
app.use('/',userRoutes);

app.listen(3001,()=>{
    console.log("running server");
    

})