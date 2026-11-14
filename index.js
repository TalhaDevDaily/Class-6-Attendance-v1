require('dotenv').config();
const express = require('express');
const app = express();
const mongooseConnect = require('./config/dbConfig');
const {
  createEntry,
  readAll,
  readByName,
  readByMonth,
  readByFullDate,
  updateEntry,
  deleteEntry,
} = require('./controllers/studentCtrl');

app.use(express.json());

mongooseConnect();

///////////////////// Create Attendance Entry
app.post('/student/entry', createEntry);

// Read All
app.get('/student/sort/all', readAll);

///////////////////// Read by Name
// Name: Michael Jackson, Stanley Marsh, Kyle Broflovski, Eric Cartman, Kenneth McCormick, Butters Stotch
app.get('/student/sort/name/:fullName', readByName);

///////////////////// Read by Month
// Month: january, february, march
app.get('/student/sort/month/:month', readByMonth);

///////////////////// Read by Date
// Date: 01/01/2027, 23/01/2027, 14/02/2027, 18/02/2027, 25/03/2027, 26/03/2027
app.get('/student/sort/date/:date', readByFullDate);

///////////////////// Update Entry
app.post('/student/change/:id', updateEntry);

///////////////////// Delete Entry
app.delete('/student/remove/:id', deleteEntry);

app.listen(process.env.PORT, () => console.log(`Server is running`));
