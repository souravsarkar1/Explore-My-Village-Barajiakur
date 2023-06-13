const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    name: String,
    email: String,
    message: String
}, {
    versionKey: false
})


const MessageModel = mongoose.model("message", messageSchema);

module.exports = { MessageModel };

/**
 * title ==> String
body ==> String
device ==> String
no_of_comments ==> Number
 */