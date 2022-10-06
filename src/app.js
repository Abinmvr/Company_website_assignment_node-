const express = require('express');
const app = express();
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",'Origin,X-Required-With,Content-Type, Accept, Authorization');
    res.header("Access-Control-Allow-Methods",'*');
    res.header("Access-Control-Allow-Credentials",true);
    next();
});
app.use(express.json());
const userRoutes = require('./routes/user_Routes/userRoutes');
const insightRoutes =require('./routes/user_Routes/insightsRouter');
const achieveRoutes =require('./routes/user_Routes/achievementRouter');
const admin_achieveRoutes = require('./routes/admin_Routes/admin_achieve_routes');
const admin_insightsRoutes = require('./routes/admin_Routes/admin_insights_router')
app.use('/',userRoutes);
app.use('/',insightRoutes);
app.use('/',achieveRoutes);
app.use('/',admin_achieveRoutes);
app.use('/',admin_insightsRoutes);

app.listen(3001,()=>{
    console.log("running server");
})