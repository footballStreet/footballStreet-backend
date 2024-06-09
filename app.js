import express from 'express';
import session from 'express-session';
import methodOverride from 'method-override';
import bodyParser from 'body-parser';
import db from './models/index.js';
import userRouter from './routes/user.router.js';

db.authenticate()
  .catch(error => console.error(error))

const app = express();

app.use(express.json());

app.use('/users', userRouter)

export default app;