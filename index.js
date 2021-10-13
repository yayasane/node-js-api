const express = require('express')
require('./models/dbconfig')
const bodyParser = require('body-parser')
const app = express()
const postController = require('./controllers/postController')
const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

app.use(bodyParser.json())
app.use('/posts', postController)

app.listen(5500, () => {
  console.log('Server started')
})
