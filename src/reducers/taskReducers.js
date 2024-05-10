import Task from "../components/models/tasks.js";
import { Add_Task, Delete_Task } from "../config/actionTypes.js";
const initialState = [];

export const taskResucers = (state = initialState, action) => {
  switch (action.type) {
    case Add_Task:
      const { data } = action;
      const task = new Task(state.length + 1, data.title, data.description);
      return [...state, task];
    case Delete_Task:
      const { id } = action;
      return state.filter((task) => task.id !== id);
    default:
    return  state;
  }
};
