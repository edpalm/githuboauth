'use strict'

const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  githubID: {
    type: String,
    required: true,
  },
  avatar_url: {
    type: String,
    required: true
  },
  organizations_url: {
    type: String,
    required: true
  },
  repos_url: {
    type: String,
    required: true
  }
})
