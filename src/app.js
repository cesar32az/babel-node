import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import './config';
import apiRoutes from './routes';

// initializations
const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to Javascript api!' });
});
app.use('/api', apiRoutes);

export default app;
