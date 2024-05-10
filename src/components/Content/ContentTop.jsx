import { useState } from "react";
import "./style.css";
import TaskManager from "../TaskManager/TaskManager";
export default function ContentTop() {
  return (
    <div className="main-content-top">
        <TaskManager/>
    </div>
  );
}
