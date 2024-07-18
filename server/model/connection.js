var mongoose = require('mongoose')

var url = "mongodb://localhost:27017/cms"

mongoose.connect(url)
var db = mongoose.connection
console.log("Successfully connected to MongoDB Database")
module.exports = db
