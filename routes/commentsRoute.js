// get all comments associated with a memory
const express = require('express')
const router = express.Router()
const memoryModel = require('../models/memoryModel')

router.get('/comments/:memoryid', async (req,res)=>{
    // client needs to send author's id in the body
    const memoryId = req.params.memoryid
    try {
      const comments = await memoryModel.findById(memoryId).populate("comments")
      res.status(200).send(comments)
    } catch (error) {
      res.send(error)
    }
})

module.exports = router