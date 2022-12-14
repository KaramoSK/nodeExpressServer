const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Users', UserSchema);