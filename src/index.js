const express=require('express');
const app=express()

const route=require('./routes/route')
app.use(express.json())






app.use("/",route)

app.listen(3000 ,()=>{
    console.log("server is running on port 3000")
})