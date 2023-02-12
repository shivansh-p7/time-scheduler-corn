const express=require('express');
const app=express()
const cron=require('node-cron')
const route=require('./routes/route')
app.use(express.json())


cron.schedule("*/10 37 19 12 2 *",()=>{
    console.log("task is running in every 10 seconds")
})



app.use("/",route)

app.listen(3000 ,()=>{
    console.log("server is running on port 3000")
})