/*
=====================================
  ; Title: employee.js
  ; Author: Natasha Whitmer
  ; Date: October 9 2019
  ; Description: employee.js
======================================
*/
const mongoose = require('mongoose');

let employeeSchema = mongoose.Schema({
  employeeId: String,
  firstName: String,
  lastName: String
});

module.exports = mongoose.model('Employee', employeeSchema);