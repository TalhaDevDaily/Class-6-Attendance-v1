require('dotenv').config();
const express = require('express');
const app = express();
const mongooseConnect = require('./config/dbConfig');
const {
  createEntry,
  readAll,
  readByMonth,
  readByFullDate,
  updateEntry,
  deleteEntry,
} = require('./controllers/studentCtrl');

app.use(express.json());

mongooseConnect();

// Create Attendance Entry
app.post('/student/entry', createEntry);

// Read All
app.get('/student/sort/all', readAll);

// Read by Month
app.get('/student/sort/month/:month', readByMonth);

// Read by Date
app.get('/student/sort/date/:date', readByFullDate);

// Update Entry
app.post('/student/change/:id', updateEntry);

// Delete Entry
app.delete('/student/remove/:id', deleteEntry);

app.listen(process.env.PORT, () => console.log(`Server is running`));
