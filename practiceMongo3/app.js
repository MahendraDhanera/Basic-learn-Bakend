const express = require('express')
const app = express();

const userModel = require('./usermodel')

app.get("/", (req, res) => {
    res.send("hy mahendra");
})

app.get("/create", async (req, res) => {
    let created = await userModel.create({
        name: "mahendra rajput",
        username: "mahendraDhanera",
        email: "mahendra@gmail.com"
    })
    res.send(created);
})

app.get("/update", async (req, res) => {
    let updatedUser = await userModel.findOneAndUpdate({username:"mahendraDhanera"},{name:"hemant"},{new:true})
    res.send(updatedUser);
})

app.get("/read", async (req, res) => {
    let readUser = await userModel.find()
    res.send(readUser);
})

app.get("/delete", async (req, res) => {
    let DeleteUser = await userModel.findOneAndDelete({name:"mahendra"})
    res.send(DeleteUser);
})


app.listen(30001, () => {
    console.log("its running.......");
})