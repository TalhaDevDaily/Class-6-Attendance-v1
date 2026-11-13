require('dotenv').config();
const express = require('express');
const app = express();
const mongooseConnect = require('./config/dbConfig');
const { createEntry } = require('./controllers/studentCtrl');

app.use(express.json());

mongooseConnect();

app.post('/student/entry', createEntry);

app.listen(process.env.PORT, () => console.log(`Server is running`));
