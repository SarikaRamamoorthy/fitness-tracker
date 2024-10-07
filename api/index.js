import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRouter from './routes/userroute.js'


dotenv.config();
mongoose.
    connect(process.env.MONGO_CONNECT)
    .then(() => {
    console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    })
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})

app.use('/api/user', userRouter);