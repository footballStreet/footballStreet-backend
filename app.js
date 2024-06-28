import express from 'express';
import session from 'express-session';
import methodOverride from 'method-override';
import bodyParser from 'body-parser';
import db from './models/index.js';
import userRouter from './routes/user.router.js';
import gamesRouter from './routes/game.router.js';

db.authenticate()
  .catch(error => console.error(error))

const app = express();

app.use(express.json());

app.use('/users', userRouter);
app.use('/games', gamesRouter);

export default app;