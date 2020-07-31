require('dotenv').config();

const PORT = 5150;
const express = require('express');
const server = express();

const bodyParser = require('body-parser');
const morgan = require('morgan'); 

const apiRouter = require('./api');
const { client } = require('./db');

client.connect();

server.use(bodyParser.json());
server.use(morgan('dev'));

server.use('/api', apiRouter);

server.listen(PORT, () => {
    console.log('I am all the way up', PORT);
});

// server.use((req, res, next) => {
//     console.log('start body');
//     console.log(req.body);
//     console.log('end body');
//     next();
// });



  


