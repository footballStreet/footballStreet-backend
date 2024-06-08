import express from 'express';
import session from 'express-session';
import methodOverride from 'method-override';
import bodyParser from 'body-parser';
import db from './models/index.js';

db.authenticate()
  .catch(error => console.error(error))

const app = express();

export default app;