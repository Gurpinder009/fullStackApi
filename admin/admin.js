import express from "express";


export const adminRouter = express.Router();


adminRouter.get("/",(req,res)=>{
    res.status(200).json("this is working fine")
})