const express = require('express');
const app = express();
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",'Origin,X-Required-With,Content-Type');
    res.header("Access-Control-Allow-Methods",'*');
    res.header("Access-Control-Allow-Credentials",true);
    next();
});
app.use(express.json());
const userRoutes = require('./routes/userRoutes');
const insightRoutes =require('./routes/insightsRouter');
app.use('/',userRoutes);
app.use('/',insightRoutes);
app.listen(3001,()=>{
    console.log("running server");
})