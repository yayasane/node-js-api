const express = require('express')

const router = express.Router()

const ObjectID = require('mongoose').Types.ObjectId

const { PostsModel } = require('../models/postModels')

router.get('/', (req, resp) => {
  PostsModel.find((err, docs) => {
    if (!err) resp.send(docs)
    else console.log('Error to get data: ' + err)
  })
})

router.post('/', (req, resp) => {
  const newRecord = PostsModel(req.body)

  newRecord.save((err, doc) => {
    if (!err) resp.send(doc)
    else console.log('Error creating new data: ' + err)
  })
})

router.put('/:id', (req, resp) => {
  if (!ObjectID.isValid(req.params.id))
    return resp.status(400).send('ID unknow : ' + req.params.id)

  PostsModel.findByIdAndUpdate(req.params.id, req.body, (err, doc) => {
    if (!err) resp.send(doc)
    else console.log('Update error : ' + err)
  })
})

router.delete('/:id', (req, resp) => {
  if (!ObjectID.isValid(req.params.id))
    return resp.status(400).send('ID unknow : ' + req.params.id)

  PostsModel.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) resp.send(doc)
    else console.log('Delete error : ' + err)
  })
})

module.exports = router
