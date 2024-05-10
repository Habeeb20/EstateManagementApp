import express from "express";
import cookieParser from "cookie-parser";
import { configDotenv } from "dotenv";
import postroute from "./routes/postRoute.js";
import authroute from "./routes/authroute.js";
import userRoute from "./routes/userRoute.js";


const app = express();

app.use(cookieParser())
app.use(express.json());
app.use("/api/post", postroute)
app.listen(8800, () => {
    console.log("server is running")
})