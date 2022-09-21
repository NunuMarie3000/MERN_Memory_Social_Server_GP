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
    const author = await userModel.findById("632b2cfae04541e4ffed9fac")
    const memory1 = await memoryModel.create({
      author:"632b2cfae04541e4ffed9fac",
      createdAt: Date.now(),
      image:"https://scx2.b-cdn.net/gfx/news/2021/ocean.jpg",
      content:"I went to the beach! Isn't it beautiful?",
    })
    await memory1.save()
    author.memories = [memory1]
    await author.save()
  } catch (error) {
    console.log(error)
  }
}

// const seedComment = async () => {
//   try {
    
//   } catch (error) {
//     console.log(error)
//   }
// }

module.exports = { seedUser, seedMemory }
