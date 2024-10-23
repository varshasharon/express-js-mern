const http = require('http')

http.createServer((req,res) => {

    console.log(req.method);
    console.log(req.url);
    res.write(req.method + ' ' + req.url);
    res.end();
}).listen(4000, ()=> console.log("Server is listening on : 4000"));//Call the server with port 
// //Rules of setting a port no. is that no other services must not be using it


//Express
// const express = require ('express');
// const app = express();
// app.use((req, res)=>{
//     res.send("Express server started...");
// });
// app.listen(4000, () => console.log("Server started in port"));
