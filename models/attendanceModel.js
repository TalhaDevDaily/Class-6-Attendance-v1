const mongoose = require('mongoose');
const { Schema } = mongoose;

const attendanceSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  attendance: {
    type: Boolean,
    enum: [true, false],
    default: false,
    required: true,
  },
  homework: {
    type: Boolean,
    enum: [true, false],
    default: false,
    required: true,
  },
  date: {
    type: String,
    pattern: '^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$',
    required: true,
  },
  month: {
    type: String,
  },
});

module.exports = mongoose.model('Attendance', attendanceSchema);
