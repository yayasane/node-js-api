const mongodb = require('mongoose')

const uri = 'mongodb://localhost:27017/node-api'
mongodb.connect(
  uri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log('Mongodb connected')
    else console.log('Connection error: ' + err)
  },
)
