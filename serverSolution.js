const http = require('http');

const server = http.createServer((req, res) => {
  //Simulate an error
  //throw new Error('Something went wrong!');
  try{
    // Handle requests here
    console.log('Request received!');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  } catch (err) {
    console.error('An error occurred:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err);
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});