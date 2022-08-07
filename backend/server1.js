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
