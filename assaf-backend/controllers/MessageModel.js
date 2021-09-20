var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    message: String
});
module.exports = mongoose.model("Message", MessageSchema);