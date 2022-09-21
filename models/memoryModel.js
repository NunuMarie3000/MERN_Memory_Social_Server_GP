const mongoose = require('mongoose');

const memorySchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  image:{
    type: String
  },
  content:{
    type: String
  },
  likes: Number,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
})

const memoryModel = mongoose.model("Memory", memorySchema)

module.exports = memoryModel