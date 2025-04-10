import express from 'express';
import { roomRoutes } from './api/routes/rooms.js';
import { studentRoutes } from './api/routes/students.js';
import { staffRoutes } from './api/routes/staff.js';

const app = express();

/* routes */
app.use('/rooms', roomRoutes);
app.use('/students', studentRoutes);
app.use('/staff', staffRoutes);

export { app }
