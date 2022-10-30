const express = require('express');

const mongoose = require('mongoose');

const app = express();

const PORT = 8000;
 
const DB_URL= 'mongodb+srv://mithun:v971152532v@mernapp.cwd2ctz.mongodb.net/MernCrud?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{})
.then(() => {
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error',err));


app.listen(PORT, () => {
    console.log(`app is running on ${PORT}`);
});