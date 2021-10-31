const mongoose = require('mongoose');
const { ObjectId } = require('mongoose');

const certificateSchema = mongoose.Schema({
  user: {
    type: ObjectId,
    ref: 'User',
  },
  date: {
    type: Date,
  },
  template: {
    type: String,
  },
});

const Certificate = mongoose.model('Certificate', certificateSchema);

module.exports = Certificate;
