// code away!
const server = require ('./server/server.js');

const PORT = process.env.PORT || 5000;

server.listen(PORT, ()=> console.log(`\n Server Running on ${PORT}`));