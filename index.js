// Synchronous method => confirmation is done using the try and catch 
// const fs = require('fs');
// function createFileSync(){
//     try{
//         console.log("Before...");
//         fs.writeFileSync("sample1.txt","sample data");
//         console.log("File is created");
//         console.log("After...");
//     } catch(e){
//         console.log(e);
//     }
// }
// createFileSync();


//Asynchronous method => eroor handling done internally, no need of catch
// const fs = require('fs');
// function createFileAsync(){

//         console.log("Before...");
//         fs.writeFileSync("sample2.txt","sample data", (err)=>{
//             if(err)
//             {
//                 console.log(err);
//             }
//             else{
//                 console.log("File is created");
//             }
//         });
        
//         console.log("After...");

// }
// createFileAsync();


//Read operation
//Sync
// const fs = require('fs');
// function readFileSync(){
//     try{
//         console.log("Before...");
//         let data= fs.readFileSync("sample1.txt", "utf8");
//         console.log(data);
//         console.log("After...");
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// readFileSync();


//Async (uses callback function with err and data as parameters)
// const fs = require('fs');
// function readFileAsync(){
//     try{
//         console.log("Before...");
//         fs.readFile("sample1.txt", "utf8", (err,data)=>{
//             if(err){
//                 console.log(data);
//             }
//             else{
//                 console.log("After...");
//             }
//         });
        
        
//     }
//     catch(err){
//        console.log(err);
//     }

// }
// readFileAsync();


//Delete 
//Sync
//err.message is used for displaying only the error msg from the error stack
// const fs = require('fs');
// function deleteFileSync(){
//     try{
//         console.log("Before...");
//         fs.unlinkSync("sample1.txt");
//         console.log("File deleted");
//         console.log("After...");
//     }
//     catch(err)
//     {
//         console.log(err.message);
//     }
// }
// deleteFileSync();

// const fs = require('fs');
// const path = './bakery.json'; 
// function readFileSync(){
//     try{
//         const data= fs.readFileSync(path, "utf8");
//         const parsedData= JSON.parse(data);
//         // console.log(parsedData)
//         parsedData.push({ id:4, name: "Butterscotch" });

//         fs.writeFileSync(path,JSON.stringify(parsedData),"utf8");
//         console.log('Item added successfully.');
//     }
//     catch(err){
//         console.log(err.message);
//     }
// }
// readFileSync();


//22-10-24
//Creating a node server


// const express = require('express');
// const app = express();
// const port = 3000;

// app.use(express.json());

// app.get('/welcomevarsha', (req, res) => {
//   res.send('Hello Varsha, this is a message from the server!');
// });

// app.post('/add', (req, res) => {
//   const { a=5, b=10 } = req.body;
//   const sum = a + b;
//   res.json({ sum });
// });


// app.listen(port, () => {
//   console.log('Server running...');
// });






const express = require('express');
const app = express();
const moduleExp = require('./exp.js');
const port = 3000;

app.use(express.json());

app.get('/welcomevarsha', (req, res) => {
    const message = moduleExp.welcomevarsha(); 
    res.send(message);
  });
  

  app.post('/multi', (req, res) => {
    const { a=10, b=20 } = req.body;
    const multi = moduleExp.multi(a, b);
    res.json({ multi });
  });

  app.listen(port, () => {
    console.log('Server running...');
  });
