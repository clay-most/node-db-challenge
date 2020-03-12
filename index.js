const server = require("./server.js");

const PORT = 8080;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}...`);
});