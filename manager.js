// Load HTTP module
const http = require("http");
const Lcd = require("lcd");

const hostname = "192.168.188.21";
const port = 8000;

const lcd = new Lcd({ rs: 26, e: 19, data: [13, 6, 5, 11], cols: 16, rows: 2 });


function writeToLcd(col, row, data) {
  return new Promise((resolve, reject) => {
    lcd.setCursor(col, row);
    lcd.print(data, (err) => {
      if (err) {
        reject();
      }
      resolve();
    });

// Create HTTP server
const server = http.createServer(async function (req, res) {
  res.writeHead(200, { "Content-Type": "text/json" });
  await writeToLcd(0, 0, "Test");




  res.end("Hello World\n");
});

// Prints a log once the server starts listening
server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});
