const PORT = 5150;
const express = require('express');
const server = express();

const apiRouter = require('./api');
server.use('/api', apiRouter);

const bodyParser = require('body-parser');
server.use(bodyParser.json());

const morgan = require('morgan');
server.use(morgan('dev'));

const { client } = require('./db');
client.connect();

server.listen(PORT, () => {
    console.log('I am all the way up', PORT);
});

server.use((req, res, next) => {
    console.log('start body');
    console.log(req.body);
    console.log('end body');
    next();
});

// server.get('/api', (req, res, next) => {
//     console.log("A get request was made to /api");
//     res.send({ message: "success" });
//   });
  
// server.use('/api', (req, res, next) => {
//     console.log("A request was made to /api");
//     next();
//   });
  


