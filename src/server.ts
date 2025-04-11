import http from 'http';
import { app } from './app';

const PORT: string | number = process.env.PORT || 3500;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
});
