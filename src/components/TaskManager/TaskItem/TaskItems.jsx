import React from 'react'
import {FaTrash} from 'react-icons/fa'
import { connect } from 'react-redux'
import { deleteTaskAction } from '../../../actions/TaskAction.js'
const TaskItems = (props) => {
    const {task} = props
    const handleDelete = () =>{
      props.deleteTask(task.id)
    }
  return (
    <div>
      <span>{task.title}</span>
      <FaTrash onClick={handleDelete}/>
    </div>
  )
}

const dispatchToProps = dispatch =>{
  return{
    deleteTask:(id)=>{
      dispatch(deleteTaskAction(id))
    }
  
  }
}

export default connect( null , dispatchToProps)(TaskItems)
