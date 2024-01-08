const express = require('express');
require("./db/conn");
const FormResponse = require("./models/response");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Handling Post Request
app.post("/data", async(req, res) => {
  try{
    const addingInternData = new FormResponse(req.body)
    console.log(req.body);
    const insertdata = await addingInternData.save();
    res.status(201).send(insertdata);
  }catch(e){
    res.status(400).send(e);
  }
})

// Handling Get Request
app.get("/getdata", async(req, res) => {
  try{
    const getData = await FormResponse.find({});
    res.send(getData);
  }catch(e){
    res.status(400).send(e);
  }
})

app.get("/", async(req, res) => {
  res.send("HI");
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

