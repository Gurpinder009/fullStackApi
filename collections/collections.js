import express from "express";


export const collRouter = express.Router();



collRouter.get("/",(req,res)=>{
    res.status(200).json("collections")
});


