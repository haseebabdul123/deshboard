import React, { useState } from 'react'
import "../TaskManager/TaskManager.css"
import TaskForm from "./TaskFrom/TaskForm.jsx"
import TaskList from './TaskList/TaskList.jsx'
const TaskManager = () => {

  return (
    <div className='main-content'>
      <div className='form'><TaskForm/></div>
      <div className='list'><TaskList/></div>

    </div>
  )
}

export default TaskManager
