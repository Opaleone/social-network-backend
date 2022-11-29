const { connect, connection } = require('mongoose')

connect('mongodb://localhost/socialmediaDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = connection