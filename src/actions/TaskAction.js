import {Add_Task , Delete_Task} from "../config/actionTypes.js"


/**
 * 
 * @param {title , description} data 
 */
export const addTaskAction = (data)=>{
    return {
        type: Add_Task,
        data
    }
}

export const deleteTaskAction = (id)=>{
    return {
        type: Delete_Task,
        id
    }
}