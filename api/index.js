import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import userRouter from './routes/userroute.js'
import authRouter from './routes/authroute.js'


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
app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success : false,
        statusCode,
        message
    })
})