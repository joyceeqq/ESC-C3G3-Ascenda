const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose.connect('mongodb+srv://joyceeqq:Salty1978@expenses.iwtkw.mongodb.net/', { useNewUrlParser: true });

//require routes
app.use("/", require("./routes/membershipRoute"));


app.listen(3001, function(){
    
})

const {pollForHandbackUpdate} = require('./Functions/sftpPushPollInterval.js');
var pollInterval = setInterval(function() 
{
    pollForHandbackUpdate(pollInterval);
}, 5000);


// const express=require("express")

// // Importing all the routes
// const memberRoute=require("./routes/membershipRoute")
// const programRoute=require("./routes/programRoute")

  
// // Handling routes request
// app.use("/admin/redeem",memberRoute)
// app.use("/admin/addProgram",loginroute)
// app.listen((3000),()=>{
//     console.log("Server is Running")
// })