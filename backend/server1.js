const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const webpush = require("web-push");

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose.connect('mongodb+srv://joyceeqq:Salty1978@expenses.iwtkw.mongodb.net/', { useNewUrlParser: true });

//require routes
app.use("/", require("./routes/membershipRoute"));


app.listen(3001, function(){
    
})

// Polling section
const {pushSchedule, pollCompilePushAccrual, pollForHandbackUpdate, handbackRetrieved} = require('./Functions/sftpPushPollInterval.js');
const {updateTransactions, readHandbackFileAsJson} = require('./Functions/processHandbackCSV.js');

var dailyPoll = setInterval(function()
{
    let date = new Date();
    let currentPushSchedule = pushSchedule(8, 47, 0, 0);

    if (date.getHours() === currentPushSchedule.getHours() && date.getMinutes() === currentPushSchedule.getMinutes())
    {
        pollCompilePushAccrual(currentPushSchedule);
    }
    else if (date.getTime() > currentPushSchedule.getTime() && !handbackRetrieved())
    {
        console.log("Past push schedule, polling now");
        pollForHandbackUpdate();
    }
    else if (handbackRetrieved())
    {
        console.log("Handback for today retrieved");
        updateTransactions(readHandbackFileAsJson(new Date()));
    }
    else if (date.getTime() < currentPushSchedule.getTime())
    {
        console.log("Not push time yet");
    }


}, 5000);
