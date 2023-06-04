import axios from 'axios';

const API_URL = '/api/tasks/'

//Create New Task

const createTask = async (taskData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
    const response = await axios.post(API_URL, taskData, config)

    return response.data
}

//Gets user's Tasks
const getTasks = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
    
    const response = await axios.get(API_URL, config)

    return response.data
}

//Updates user's Task
const updateTask = async (taskData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.put(API_URL + taskData.taskId, taskData, config)

    return response.data
}


//Deletes user's Task
const deleteTask = async (taskId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.delete(API_URL + taskId, config)

    return response.data
}

const taskService = {
    createTask, getTasks, updateTask, deleteTask
}

export default taskService;