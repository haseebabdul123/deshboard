import {taskURL} from "../config/api"
import axios from "axios"

export const getTasks = async () =>{
    return await axios.get(taskURL).then(res => res.data)
}
/**
 * 
 * @param {title , description , dueDate , priority , status} data
 */

export const addTasks = async (data) =>{
    return await axios.post(taskURL ,  data).then(res => res.data)
}

export const deleteTasks = async (id) =>{
    return await axios.delete(taskURL + '/' + id).then(res => res.data)
}