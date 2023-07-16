import express from "express"
import dbConnect from "./database/index"
const app=express();
const PORT=5000;

app.get("/",(req,res)=>{
    res.json({name:"Shoaib"})
})

app.listen(PORT,()=>{
    console.log(`Backend is running on port ${PORT}`);
})
