require('dotenv').config();
const mongoose=require('mongoose');
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

.then(()=>{
    console.log("db connected")
})
.catch((err)=>
    console.log(err));