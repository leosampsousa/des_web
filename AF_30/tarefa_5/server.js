const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');

const app = express();
app.use(cors());

const aluno = require('./routes/aluno.route');

const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/db_teste'
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api', aluno);

app.listen(3000);