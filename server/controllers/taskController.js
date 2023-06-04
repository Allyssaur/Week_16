const asyncHandler = require('express-async-handler');
const Task = require('../models/taskModel');
const User = require('../models/userModel');

const getTasks = asyncHandler(async (req, res) => {
    const tasks = await Task.find({ user: req.user.id })
    
    res.status(200).json(tasks)
})

const setTasks = asyncHandler(async (req, res) => {
    if(!req.body) {
        res.status(400)
        throw new Error('Please add some content!')
    }

    const task = await Task.create({
        roll: req.body.roll,
        task: req.body.task,
        difficulty: req.body.difficulty,
        checked: req.body.checked,
        user: req.user.id,
    })

    res.status(200).json(task)
})

const updateTasks = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id)     //Finds User

    if(!task) {     //Checks for a task
        res.status(400)
        throw new Error('Task Not Found!')
    }

    if(!req.user) {                                         //Checks for a users existance
        res.status(401)
        throw new Error('User not found!')
    }

    if(task.user.toString() !== req.user.id) {              //Ensures user can only update their own tasks and not other user's tasks by matching user to task to user
        res.status(401)
        throw new Error('This user cannot update this task!')
    }

    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {     //Finds task to update by id
        new: true,
    })

    res.status(200).json(updatedTask)
})



const deleteTasks = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id)

    if(!task) {
        res.status(400)
        throw new Error('Task Not Found!')
    }

    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    if(task.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    await task.deleteOne()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getTasks, setTasks, updateTasks, deleteTasks
}