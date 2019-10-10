/*
=====================================
  ; Title: quiz.js
  ; Author: Natasha Whitmer
  ; Date: October 9 2019
  ; Description: quiz.js
======================================
*/
const mongoose = require('mongoose');

let quizSchema = mongoose.Schema({
  quizId: String,
  quizTitle: String
});

module.exports = mongoose.model('Quiz', quizSchema);