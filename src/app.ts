import express from 'express';
import carRouter from './Routes/carRouter';
import mortocycleRouter from './Routes/motorcycleRouter';

const app = express();

app.use(express.json());
app.use('/cars', carRouter);
app.use('/motorcycles', mortocycleRouter);

export default app;
