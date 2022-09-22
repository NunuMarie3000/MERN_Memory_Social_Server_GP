//crud a comment 
const express = require('express')
const router = express.Router()
const commentModel = require('../models/commentModel')
const memoryModel = require('../models/memoryModel')

router.post('/newcomment', async (req, res) => {
  const newBody = {
    author: req.body.author,
    body: req.body.body,
    commented_on: req.body.commented_on,
    likes: 0
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
router.get('/comment/:commentid', async (req,res)=>{
  // client needs to send author's id in the body
  const commentId = req.params.commentid
  try {
    const comment = await commentModel.findById(commentId)
    res.status(200).send(comment)
  } catch (error) {
    res.send(error)
  }
})

// update one comment
router.put('/comment/:commentid', async (req,res)=>{
  const commentId = req.params.commentid
  const updatedBody = req.body
  try {
    const updatedCommment = await commentModel.updateOne({"_id": commentId}, updatedBody)
    res.status(200).send(updatedCommment)
  } catch (error) {
    res.send(error)
  }
})

// delete one comment
router.delete('/comment/:commentid', async (req,res)=>{
  const commentId = req.params.commentid
  try {
    await commentModel.deleteOne({"_id": commentId})
    res.status(200).send('Comment deleted')
  } catch (error) {
    res.send(error)
  }
})
    
module.exports = router