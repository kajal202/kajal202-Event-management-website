const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  attendees: Number,
  location: String,
  category: String,
  image: { type: String, required: false }, 
});

module.exports = mongoose.model('Events', eventSchema);
