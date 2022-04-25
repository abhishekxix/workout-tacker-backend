/**
 * Required External Modules
 */
require('express-async-errors');
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import { errorHandler } from './middleware';
import { setupRoutes } from './api/setupRoutes';
import { connectDB } from './db/connect';

dotenv.config();

/**
 * App Variablesnode build/app.js
 */
if (!process.env.PORT) process.exit(1);

const PORT = parseInt(process.env.PORT as string, 10);
const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.use(cookieParser(process.env.COOKIE_SECRET));

setupRoutes(app);

app.use(errorHandler);
/**
 * Server Activation
 */
const start = async () => {
  await connectDB(process.env.MONGO_URI as string);
  app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`);
  });
};

start();
