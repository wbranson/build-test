// Simple Node.js HTTP server
const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Build test server is running!\n');
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
