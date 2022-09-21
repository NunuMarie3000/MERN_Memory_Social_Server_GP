const userModel = require('../models/userModel')
const memoryModel = require('../models/memoryModel')
const commentModel = require('../models/commentModel')

const seedUser = async () =>{
  try {
    const user1 = await userModel.create({
      email:"vmarie1997@gmail.com"
    })
    const user2 = await userModel.create({
      email:"clickjaw@outlook.com"
    })
    await user1.save()
    await user2.save()
  } catch (error) {
    console.log(error)
  }
}

const seedMemory = async () => {
  try {
    const memory1 = await memoryModel.create({
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
      likes: {
        required: true,
        type: Number
      },
      comments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
      },
    })
  } catch (error) {
    console.log(error)
  }
}

module.exports = { seedUser }
