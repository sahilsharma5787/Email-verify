require('./config/db')
const express = require('express');
const cors = require('cors'); // cors help in running the  backend and frontend on the same url 
const port=5000;

const app = express();
const UserRouter=require('./api/User')
app.use(cors());
app.use(express.json());  //  body parser  

app.use('/user',UserRouter)
app.listen(port,()=>{
    console.log("server started")
})
