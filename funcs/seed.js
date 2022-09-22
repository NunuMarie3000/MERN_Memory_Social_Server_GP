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
    const user3 = await userModel.create({
      email: "storm.obryant@gmail.com"
    })
    await user1.save()
    await user2.save()
    await user3.save()
  } catch (error) {
    console.log(error)
  }
}

const seedMemory = async () => {
  try {
    //tyler id
    const author = await userModel.findById("632c8c45f7c16e6c538b1fed")
    // const author = await userModel.findById("632c8c45f7c16e6c538b1fef")
    const memory1 = await memoryModel.create({
      author:"632c8c45f7c16e6c538b1fed",
      createdAt: Date.now(),
      image:"https://scx2.b-cdn.net/gfx/news/2021/ocean.jpg",
      content:"IThis is tyler's vibe",
      likes: 0,
      comments: []
    })
    await memory1.save()
    author.memories = [memory1]
    await author.save()
  } catch (error) {
    console.log(error)
  }
}

const seedComment = async () => {
  const commentBody = {
    author: "632c8c45f7c16e6c538b1fed",
    body: "I love that!",
    commented_on: "632c8cfc35eabce2af532e0a"
  }
  try {
    const newComment = await commentModel.create(commentBody)
    await newComment.save()
    const memory = await memoryModel.findById("632c8cfc35eabce2af532e0a")
    memory.comments = [...memory.comments, newComment]
    await memory.save()
  } catch (error) {
    console.log(error)
  }
}

module.exports = { seedUser, seedMemory, seedComment }
