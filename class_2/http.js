const http = require("http");
const server = http.createServer((req, res) => {

  if (req.url === "/home") {

    // for body data type
    res.setHeader('Content-Type', 'text/plain')
    // status code
    res.writeHead(201);
    res.end("Hello");

  } else if(req.url === "/about") {

    // for body data type
    res.setHeader('Content-Type', 'text/plain')
    // status code
    res.writeHead(201)
    res.end('Hello')
  } else {


    const data = [
      {firstName: 'Kawsar', lastName: 'Ahmed'},
      {firstName: 'Imran', lastName: 'Ahmed'},
      {firstName: 'Shamim', lastName: 'Mohammad'},
    ]

    // for body data type
    res.setHeader('Content-Type', 'text/json')
    // status code
    res.writeHead(201)
    res.end(JSON.stringify(data))
  }

});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running @ ${PORT}`);
});
