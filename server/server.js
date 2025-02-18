import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/dbConfig.js';
import cors from 'cors'
const app = express();
import userRouter from "./routes/userRoute.js";

app.use(cors({
    origin: "http://localhost:5173", 
    methods: "GET,POST", 
    allowedHeaders: "Content-Type,Authorization",
  }));

dotenv.config({path: './config.env'});


app.use(express.json());

connectDB();

app.use('/user',userRouter);


const PORT = process.env.PORT || 5000;



app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
    
})