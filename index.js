import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv"

import {db} from "./database/connect.js";
import {collRouter} from "./collections/collections.js"
import {jwlRouter} from "./jewellry/jewellry.js"
import {adminRouter} from "./admin/admin.js"


dotenv.config();
const app = express();



app.use(cors());
app.use(express.json());
app.use(express.urlencoded());


app.use("/api/admin",adminRouter);
app.use("/api/jewellries",jwlRouter);
app.use("/api/collections",collRouter);






app.listen(process.env.PORT,()=>{
    console.log("http://localhost:3000/api");
})





