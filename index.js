import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {db} from "./database/connect.js";
import {collRouter} from "./collections/collections.js"
import {jwlRouter} from "./jewellry/jewellry.js"
import {adminRouter} from "./admin/admin.js"

const admin = {
    userName:"admin",
    userPassword:"password"
}


const app = express();

app.use("/api/admin",adminRouter);
app.use("/api/jewellries",jwlRouter);
app.use("/api/collections",collRouter);






app.listen(3000,()=>{
    console.log("http://localhost:3000/api");
})





