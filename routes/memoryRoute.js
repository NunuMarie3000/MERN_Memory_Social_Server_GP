const express = require('express')
const router = express.Router()
const memoryModel = require('../models/memoryModel')
const userModel = require('../models/userModel')

// create new memory
router.post('/newmemory/:id', async (req,res)=>{
  const userId = req.params.id
  try {
    const author = await userModel.findById(userId)
    const newMemory = memoryModel.create({
      author: userId,
      createdAt: Date.now(),
      image: req.body.image,
      content: req.body.content,
    })
    await newMemory.save()
    author.memories = [...author.memories, newMemory]
    await author.save()
    res.status(201).send(newMemory)
  } catch (error) {
    res.send(error)
  }
})

// get one memory
router.get('/memory/:memoryid', async (req, res) => {
  const memoryId = req.params.memoryid
  try {
    const memory = await memoryModel.findById(memoryId)
    res.status(200).send(memory)
  } catch (error) {
    res.send(error)
  }
})

// update one memory
router.put('/memory/:memoryid', async (req, res) => {
  const memoryId = req.params.memoryid
  const updatedBody = req.body
  try {
    await memoryModel.updateOne({"_id": memoryId}, updatedBody)
    res.status(200).send('Memory updated successfully')
  } catch (error) {
    res.send(error)
  }
})

// update likes of memory
router.patch('/memory/:memoryid', async (req,res)=>{
  const memoryId = req.params.memoryid
  try {
    await memoryModel.updateOne({"_id": memoryId}, {$inc : {"likes": 1}})
  } catch (error) {
    res.send(error)
  }
})

// delete one memory
router.delete('/memory/:memoryid', async (req, res) => {
  const memoryId = req.params.memoryid
  try {
    await memoryModel.deleteOne({"_id": memoryId})
    res.status(200).send('Memory deleted successfully')
  } catch (error) {
    res.send(error)
  }
})

module.exports = router
