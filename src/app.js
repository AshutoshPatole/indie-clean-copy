import express from 'express';
import connectDB from './connectDb';
import ROUTE from './modules/routes';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

connectDB();
app.use(express.json());

app.get('/', (_req, res) => {
    return res.send('hello');
});

app.use('/auth', ROUTE.AUTH);

export default app;