import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/dbConfig.js';

import userRouter from "./routes/userRoute.js";

dotenv.config({path: './config.env'});

const app = express();

app.use(express.json());

connectDB();

app.use('/user',userRouter);


const PORT = process.env.PORT || 5000;



app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
    
})