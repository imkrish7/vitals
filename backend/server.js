const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');

const app = express();
const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'production';
app.use(bodyParser.json())
app.use(cors())

mongoose.connect(config.mongo_uri[environment], { useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on('error',()=>{
	console.log(`-------error-------`);
})

app.listen(config.port, () => {
	console.log(`--------server is running on port ${config.port}--------`)
})