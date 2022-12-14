const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

require('dotenv').config();

mongoose.set('strictQuery', true)
mongoose.connect(
    `mongodb+srv://Karamo:123kar123@cluster0.jruaae3.mongodb.net/Cluster0?retryWrites=true&w=majority`,
    {useNewUrlParser: true, useUnifiedTopology: true},
    ()=> {
        console.log('DB connected');
    }
);



app.use(express.json());
const routes = require('./routes/userRoutes.js')
app.use('/api', routes);

app.listen(port);
