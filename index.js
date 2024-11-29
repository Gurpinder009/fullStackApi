import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "./database/connect.js";

import { jwlRouter } from "./jewellery/jewellery.js";
import { adminRouter } from "./admin/admin.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/api/admin", adminRouter);
app.use("/api/jewelleries", jwlRouter);

app.listen(process.env.PORT, () => {
  console.log("http://localhost:3000/api");
});
