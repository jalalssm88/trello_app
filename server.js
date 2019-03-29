const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const boardRoutes = require('./api/routers/boardRoutes');
const teamRoutes = require('./api/routers/teamRoutes');
const Users = require('./api/routers/userRoutes');


mongoose.connect('mongodb://jalal123:jalal123@node-practise-cluster-shard-00-00-q9xrx.mongodb.net:27017,node-practise-cluster-shard-00-01-q9xrx.mongodb.net:27017,node-practise-cluster-shard-00-02-q9xrx.mongodb.net:27017/test?ssl=true&replicaSet=node-practise-cluster-shard-0&authSource=admin&retryWrites=true', {useNewUrlParser: true}, ()=>{
  console.log('connected to mongo db')
})


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/boards', boardRoutes);
app.use('/teams', teamRoutes);
app.use('/users', Users);

const port = 5000;
app.listen(port, ()=> {
    console.log('server is running on port 5000')
})