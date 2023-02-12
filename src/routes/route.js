const router=require('express').Router()
const cron=require('node-cron')




router.post("/scheduler",(req,res)=>{
try{
    let data=req.body
    let {text, dateTime}=data
 
    let seconds=Number(text.length+"000")
dateTime= dateTime.split(" ")
let date=dateTime[0].split("-").map(x=>Number(x))
let time=dateTime[1].split(":").map(x=>Number(x))
console.log(date,time)

   cron.schedule(`${time[1]} ${time[0]} ${date[2]} ${date[1]} *`,()=>{
    setTimeout(()=>{
      return res.send(text)
      
          },seconds)
    })
  

}catch(error){

return res.status(500).send({status:false,message:error.message})

}



})
module.exports=router