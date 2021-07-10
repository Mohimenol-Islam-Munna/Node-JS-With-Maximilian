/*
* Creating Node Js Server
*
*/

const http = require('http');

// create server 
const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === "/response" && method === "POST") {

        const body = [];

        req.on("data", (chunk) => {
            // console.log(chunk.toString());
            body.push(chunk);
        });

        req.on("end", () => {
            const parsedData = Buffer.concat(body).toString();
            // console.log(parsedData);
            const finalData = parsedData.split("=")[1];
            console.log(finalData);
        });

        res.write("data submitted");
        return res.end();
    }
    if (url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html><head></head><body><form method='POST' action='/response'><input type='text' name='message'/></form></body></html>");
        return res.end();
    }

    res.write("Unknown Route");
    res.end();

    // process.exit(); 
    //This close the node applicaton. we also say that this exit event loop.
})

// Stream & Buffer 


// running server 
server.listen(3000, () => {
    console.log("server is running at port 3000 ...");
});