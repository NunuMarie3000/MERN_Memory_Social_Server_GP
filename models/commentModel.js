const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  body: {
    type: String,
    required: true
  },
  likes: Number,
  commented_on:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Memory',
    required: true
  }
})

const commentModel = mongoose.model("Comment", commentSchema)

module.exports = commentModel