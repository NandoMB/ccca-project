import express, { Application } from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import helmet from 'helmet';
import morgan from 'morgan';


export default function Express(): Application {
  const app = express();
  app.use(compression());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(helmet());
  app.use(cookieParser());
  app.use(morgan('dev'));
  return app;
};
