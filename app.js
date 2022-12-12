const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;
const routes = require('./routes/userRoutes.js')
app.use(express.json());

app.use('/api', routes);

app.listen(port,() => {console.log(`Listening on ${port}`)});
