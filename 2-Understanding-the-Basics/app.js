/*
* Creating Node Js Server
*
*/

const http = require('http');

// create server 
const server = http.createServer((req, res) => {

    console.log(req.url);
    res.write("node js app");
    res.end();

    // process.exit(); 
    //This close the node applicaton. we also say that this exit event loop.
})

// running server 
server.listen(3000, () => {
    console.log("server is running at port 3000 ...");
});