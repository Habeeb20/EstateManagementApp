import express from "express";
import cookieParser from "cookie-parser";
import { configDotenv } from "dotenv";
import postroute from "./routes/postRoute.js";
import authroute from "./routes/authroute.js";
import userRoute from "./routes/userRoute.js";
import cors from "cors"
import testRoute from "./routes/test.route.js"
const app = express();
app.use(cors({origin:process.env.client_url, credentials:true}))
app.use(cookieParser())
app.use(express.json());
app.use("/api/auth", authroute)
app.use("/api/post", postroute)
app.use("/api/test", testRoute)
app.use("/api/user", userRoute)
app.listen(8800, () => {
    console.log("server is running")
})