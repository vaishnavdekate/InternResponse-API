const express = require('express');
const mongoose = require('mongoose');

const internsDataSchema = new mongoose.Schema({
  // Define your schema fields here
  Timestamp: String,
  Email: String,
  Address: String,
  Name: String,
  Mobile: String,
  Whatsapp_No: String,
  College: String,
  Branch_Department: String,
  Year_Semester: String,
  Please_mention_your_City: String,
  Please_mention_your_state: String,
  What_technologies_you_want_to_learn_while_doing_internship: String,
  Why_you_want_to_do_online_internship: String,
  What_are_you_hobbies_and_liking: String,
  Resume: String,
  Do_you_have_friends_who_are_also_interested_in_online_internship_Please_fill_their_details_below: String,

  //field: Number,
  // ... other fields
});

const FormResponse = new mongoose.model('internsdata', internsDataSchema);

module.exports = FormResponse;
