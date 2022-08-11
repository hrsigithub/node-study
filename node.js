console.log("Node js normal");

// node node.js
const http = require("http");
const html = require("fs").readFileSync("./index.html")

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  // res.write("<h1>Hello World</h1>");
  res.write(html);
  res.end();

  if (res.method == "GET") {
    
  }
});

server.listen(3000, () => console.log("Serverv running"));
