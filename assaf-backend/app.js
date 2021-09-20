
const express = require("express");
const app = express();




require('dotenv').config()

app.use('/api/', require('./routes/dice'));
app.use('/api/barrel/', require('./routes/barrel'));
app.use('/api/bottle/', require('./routes/bottle'));


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    const url = 'http://localhost:' + PORT + '/'
    console.log("Listening on port: " + url);
})