import express from "express";


export const jwlRouter = express.Router();



jwlRouter.get("/",(req,res)=>{
    res.status(200).json("this is working jwl je")
});

