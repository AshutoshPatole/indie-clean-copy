import express from 'express';
import ROUTE from './modules/routes';

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
    return res.send('hello');
});

app.use('/auth', ROUTE.AUTH);

export default app;