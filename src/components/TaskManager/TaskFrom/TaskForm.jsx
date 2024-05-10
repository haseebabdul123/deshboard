import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addTaskAction } from "../../../actions/TaskAction.js";
import {getTasks , addTasks , deleteTasks} from '../../../services/TaskServics.js'
import {taskURL} from '../../../config/api.js'
import axios from "axios";
function TaskForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");

  
  useEffect(() => {

    const addTasks = async (data) =>{
      try {
      await axios.post(taskURL , data).then(res => res.data)
      console.log(data)
      } catch (error) {
        console.error('Error adding task:', error);
        alert('An error occurred while adding task.');
      }
    };

    // Check if form inputs are valid and add task to JSON file
    if (title.trim() && description.trim() && dueDate && priority.trim() && status.trim()) {
      const newTask = {
        title: title.trim(),
        description: description.trim(),
        dueDate,
        priority: priority.trim(),
        status: status.trim()
      };
      addTasks(newTask);
    }
  },[title, description, dueDate, priority, status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form inputs
    if (
      !title.trim() ||
      !description.trim() ||
      !dueDate ||
      !priority.trim() ||
      !status.trim()
    ) {
      alert("Please fill in all fields.");
      return;
    }
    const data = {
      title,
      description,
      dueDate,
      priority,
      status
    };
    
    // Add task
    props.addTask(data);
    // Reset form fields
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("");
    setStatus("");
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <hr />
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Due Date:</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <div>
          <label>Priority:</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="">Select Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">Select Status</option>
            <option value="todo">To Do</option>
            <option value="inProgress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

const dispatchToProps = (dispatch) => {
  return {
    addTask: (data) => {
      dispatch(addTaskAction(data));
    },
  };
};
export default connect(null, dispatchToProps)(TaskForm);
