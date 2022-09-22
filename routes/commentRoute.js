//crud a comment 
const express = require('express')
const router = express.Router()
const commentModel = require('../models/commentModel')
const memoryModel = require('../models/memoryModel')

router.post('/newcomment/:userid/memory/:memoryid', async (req, res) => {
  const userId = req.params.userid
  const memoryId = req.params.memoryid
  const newBody = {
    author: userId,
    body: req.body.body,
    commented_on: memoryId
  }
  const memory = await memoryModel.findById(req.body.memoryid)
  try {
    const newComment = await commentModel.create(newBody)
    await newComment.save()
    memory.comments = [...memory.comments, newComment]
    await memory.save()
    res.status(201).send(newComment)
  } catch (error) {
    res.send(error)
  }
})

// get one comment associated with a memory
router.get('/comment/:memoryid', async (req,res)=>{
  // client needs to send author's id in the body
  const memoryId = req.params.memoryid
  try {
    const comment = await memoryModel.findById(memoryId)
    res.status(200).send(comment)
  } catch (error) {
    res.send(error)
  }
})

// update one comment
router.put('/comment/:memoryid', async (req,res)=>{
  // client needs to send author's id in the body
  const memoryId = req.params.memoryid
  const updatedBody = req.body
  try {
    const updatedCommment = await commentModel.updateOne({"_id": memoryId}, updatedBody)
    res.status(200).send(updatedCommment)
  } catch (error) {
    res.send(error)
  }
})

// delete one comment
router.delete('/comment/:memoryid', async (req,res)=>{
  const memoryId = req.params.memoryid
  try {
    await memoryModel.deleteOne({"_id": memoryId})
    res.status(200).send('Comment deleted')
  } catch (error) {
    res.send(error)
  }
})
    
module.exports = router