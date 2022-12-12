const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const routes = require('./routes/userRoutes.js')
require('dotenv').config();

const mongoString = process.env.DATABASE_URL

mongoose.connect(
    `mongodb+srv://Karamo:123kar123@cluster0.jruaae3.mongodb.net/?retryWrites=true&w=majority`,
    {useNewUrlParser: true, useUnifiedTopology: true},
    ()=> {
        console.log('DB connected');
    }
);



app.use(express.json());

app.use('/api', routes);

app.listen(port,() => {console.log(`Listening on ${port}`)});
