const mongoose = require('mongoose');

let quizSchema = mongoose.Schema({
  quizId: String,
  quizTitle: String
});

module.exports = mongoose.model('Quiz', quizSchema);