const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  memories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Memory'
    }
  ]
})

const userModel = mongoose.model("User", userSchema)

module.exports = userModel