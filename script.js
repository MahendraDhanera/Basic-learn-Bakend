// const fs = require('node:fs'); //node.js ke filesystem module ko ham fs variable me leke aa gye hai

//create file..
// fs.writeFile('hello.txt',"hy my name is mahrendra",function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })

//likhe huye me or kuchh add kana
// fs.appendFile('hello.txt'," and im 20 year old",function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })


//change old file name
// fs.rename("hello.txt",'mahendra.txt',(err) => {
// if(err) console.log(err);
// else console.log("Done");
// })

//copy of the file
// fs.copyFile('mahendra.txt','./copy/mahendraCopy.txt',(err)=>{
//     if(err) console.log(err);
//     else console.log("done");
// })

//remove file
// fs.unlink("mahendra.txt",(err)=>{
//     if(err) console.log(err);
//     else console.log("removed successfuly");
// })


// ..........HTTP
// const http = require('node:http');


// //creat a server in local host
// const server = http.createServer((req,res)=>{
//     res.end("hello world");
// })
// server.listen(3000);

//create server use to express npm pakhage 
// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World  mahendra dhanera ')
// })
//to create routs
// app.get('/profile', function (req, res) {
//     res.send('Hello World  mahendra dhanera and hemant ')
//   })

// app.listen(40001)


// ......middlware
// const express = require('express')
// const app = express()

// //Middlware
// app.use((req,res,next)=>{
//   console.log("middlware chala chla");
//   next();
// })

// app.get('/', function (req, res) {
//   res.send('Hello World  mahendra dhanera ')
// })


// app.listen(40001)

