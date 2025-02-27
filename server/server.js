import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/dbConfig.js';
import cors from 'cors'
const app = express();
import userRouter from "./routes/userRoute.js";
import totRouter from "./routes/totRoute.js"

dotenv.config({path: './config.env'});
app.use(cors({
    origin: process.env.BASE_URL, 
    methods: "GET,POST", 
    allowedHeaders: "Content-Type,Authorization",
  }));



app.use(express.json());

connectDB();

app.use('/user',userRouter);
app.use('/tot',totRouter)

const PORT = process.env.PORT || 5000;



app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
    
})