const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: [true, 'Campo requerido']
        },
        completed: {
            type: Boolean,
            default: false
        }

    },
    { timestamps: true }
)

const Task = mongoose.model('Task', TaskSchema)
module.exports = Task