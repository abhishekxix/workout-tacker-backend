/**
 * Required External Modules
 */
import 'express-async-errors';
import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { errorHandler } from './middleware';
import { setupRoutes } from './api/setupRoutes';

dotenv.config();

/**
 * App Variables
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

setupRoutes(app);

app.use(errorHandler);
/**
 * Server Activation
 */
app.listen(PORT, () => {
  console.log(`The app is listening on port ${PORT}`);
});
