import { log } from 'console';
import http from 'http';

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
});

server.listen(PORT, () => {
    console.log('Server is running on port 3000');
});
