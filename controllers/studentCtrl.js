const Attendance = require('../models/attendanceModel');

// Function for finding month from given date
function findMonth(date) {
  const monthSplit = date.split('/');

  if (monthSplit[1] === '01') return `january`;
  if (monthSplit[1] === '02') return `february`;
  if (monthSplit[1] === '03') return `march`;
  if (monthSplit[1] === '04') return `april`;
  if (monthSplit[1] === '05') return `may`;
  if (monthSplit[1] === '06') return `june`;
  if (monthSplit[1] === '07') return `july`;
  if (monthSplit[1] === '08') return `august`;
  if (monthSplit[1] === '09') return `september`;
  if (monthSplit[1] === '10') return `october`;
  if (monthSplit[1] === '11') return `november`;
  if (monthSplit[1] === '12') return `december`;
}
// console.log(findMonth('25/04/2025'));

// Separating date by '-'
function sortingDate(date) {
  return date.split('-').join('/');
}
// console.log(sortingDate('25-04-2025'));

const dateRegex =
  /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

// Create Student Entry
function createEntry(req, res) {
  const { fullName, attendance, homework, date, month } = req.body;

  // Validation
  const errors = {};
  if (!fullName) errors.fullName = `Full Name required`;
  if (attendance === undefined || attendance === null || attendance === '')
    errors.attendance = `Attendance required`;
  if (homework === undefined || homework === null || homework === '')
    errors.homework = `Homework required`;
  if (!date || !dateRegex.test(date))
    errors.date = `A date with the format DD/MM/YYYY is required!`;
  if (errors.fullName || errors.attendance || errors.homework || errors.date)
    return res.status(400).json({
      message: `All fields are required`,
      errors,
    });

  // Saving to MongoDB
  const create = new Attendance({
    fullName: fullName,
    attendance: attendance,
    homework: homework,
    date: date,
    month: findMonth(date),
  });

  create.save();

  res.status(200).json({ success: true, message: `Student Entry Successful` });
}

// Read all Attendance
async function readAll(req, res) {
  const readAttendance = await Attendance.find({});

  res.status(200).json({
    success: true,
    message: `You have logged ${readAttendance.length} so far!`,
    readAttendance,
  });
}

// Read Attendance by Month
async function readByMonth(req, res) {
  const { month } = req.params;
  const readMonth = await Attendance.find({ month: month });

  res.status(200).json({
    success: true,
    message: `Total entries in the month of ${month} is ${readMonth.length}`,
    readMonth,
  });
}

// Read Attendance by Date
async function readByFullDate(req, res) {
  const { date } = req.params;

  const readDate = await Attendance.find({ date: sortingDate(date) });

  res.status(200).json({
    success: true,
    message: `On ${date} there were ${readDate.length} entries made`,
    readDate,
  });
}

// Update Attendance
async function updateEntry(req, res) {
  const { id } = req.params;

  const updateAtt = await Attendance.findByIdAndUpdate({ _id: id }, req.body, {
    returnDocument: 'after',
  });

  res.status(200).json({
    success: true,
    message: `Changes below has been made!`,
    updateAtt,
  });
}

// Delete Entry
async function deleteEntry(req, res) {
  const { id } = req.params;

  const remove = await Attendance.findByIdAndDelete(id);

  res
    .status(200)
    .json({ success: true, message: `Entry below has been deleted`, remove });
}

module.exports = {
  createEntry,
  readAll,
  readByMonth,
  readByFullDate,
  updateEntry,
  deleteEntry,
};
