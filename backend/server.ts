import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
dotenv.config();

const port = process.env.PORT || 3000;

connectDB();

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
