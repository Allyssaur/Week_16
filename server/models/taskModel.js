const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    roll: {
        type: String,
    },
    task: {
        type: String,
        required: [true, 'Please add a task!'],
    },
    difficulty: {
        type: String
    },
    checked: {
        type: String
    }

})

module.exports = mongoose.model('Task', taskSchema)