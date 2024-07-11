const express=require('express')
require('dotenv').config()
const cors=require('cors')
const app=express()
const testServer=require('./testserver')
app.use(express.json())
app.use(cors())


app.get('/categories/:categoryname/products',async (req,res)=>{
    const result=await testServer.testServer('AMZ',req.params.categoryname,req.query.num,req,query.min,req.query.max)
    console.log(result)
    res.send("got")
})

app.get('/categories/:categoryname/products/:productid',(req,res)=>{

})
app.listen(process.env.PORT,()=>{console.log("server started")})