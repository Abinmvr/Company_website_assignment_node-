const express = require('express');
const app = express();
const cors =require('cors');
app.use(express.json());
app.use(cors());
const userRoutes = require('./routes/userRoutes');
app.use('/',userRoutes);

app.listen(3001,()=>{
    console.log("running server");
    

})