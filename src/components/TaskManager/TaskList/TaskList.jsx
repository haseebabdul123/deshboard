import React, { useState ,useEffect } from "react";
import "../TaskList/TaskList.css";
import {connect} from 'react-redux'
import TaskItem from '../TaskItem/TaskItems.jsx'
import axios from "axios";
import { taskURL } from "../../../config/api.js";

const TaskList = (props) => {
const [ task , setTask] = useState([])

const getTasks = async () =>{
  try {
    const res = await axios.get(taskURL)
    setTask(res.data)

  } catch (error) {
    console.error('Error getting task:', error);
    alert('An error occurred while getting task.');
  }
}
  useEffect(() => {
    getTasks();
  }, []);


    if(task.length == 0){
      return (
        <h3>No Tasks To Show</h3>
      
    )}
  return (
    <div>
      <h1>Tasks List</h1>
      <hr />
    {task.map((task)=> <TaskItem key={task.id} task={task} />)}  
    </div>
  );
};

const stateToProps = (state)=>{
  return {
    task:state.task
  }
}
export default connect(stateToProps)(TaskList);
