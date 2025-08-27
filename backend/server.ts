
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectDB from './config/db';
import authRoutes from './routes/auth';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())


const port = process.env.PORT || 3000;

connectDB();

app.use('/api/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
