
var mongoose = require('../src/mongoose')

const User = mongoose.model('User', { username: String, password: String });

module.exports = User