const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  console.log('Request received!');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//This is a very basic example of the problem
//The problem is that there is no error handling present
//If there is an error the server will crash
//A solution is to add a error handler
//This is a very common problem in Node.js