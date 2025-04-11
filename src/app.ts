import express, { Express, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import { roomRoutes } from './api/routes/rooms';
import { studentRoutes } from './api/routes/students';
import { staffRoutes } from './api/routes/staff';
import { HttpError } from './types/HttpError';

const app: Express = express();
app.use(morgan('dev'));

/* routes */
app.use('/rooms', roomRoutes);
app.use('/students', studentRoutes);
app.use('/staff', staffRoutes);

// route not found error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  const error: HttpError = new Error('Not found');
  error.status = 404;
  next(error);
});

// global error handler
app.use((error: HttpError, req: Request, res: Response, next: NextFunction) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message || 'Internal server error',
    },
  })
})

export { app }
