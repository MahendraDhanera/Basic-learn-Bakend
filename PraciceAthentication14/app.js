const express = require('express'); 
const app = express();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const cookieParser = require("cookie-parser"); 

app.use(cookieParser()); 

app.get("/",(req,res)=>{

    //encription.....
    // bcrypt.genSalt(10, function(err, salt) {
    //     bcrypt.hash("mahendra", salt, function(err, hash) {
    //        console.log(hash);
           
    //     });
    // });
//    let result =  bcrypt.compareSync("mahendra", "$2b$10$lwUzZdtsR01IqrwUGmgMfuYZRJqkcH.AdITFCZubUS62NnrMtqShS"); // true

let token = jwt.sign({email:"sage@gmail.com"},"secret")
res.cookie("token",token);
res.send("done");
     
})

app.get("/read",(req,res)=>{
let data = jwt.verify(req.cookies.token,"secret");
console.log(data); 
    res.send("done");
})



app.listen(3000,()=>{
    console.log("its running.......");
})