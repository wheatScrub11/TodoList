import React from "react";
import { useState } from "react";
import "./TaskCreator.css";

function TaskCreator({ discardCreateTaskBox, addNewTodo }) {
  const [task, setTask] = useState("");

  return (
    <div className="container">
      <textarea
        className="text-area"
        cols="30"
        rows="5"
        placeholder="type here"
        onChange={(e) => setTask(e.target.value)}
      ></textarea>

      <button className="discard-btn" onClick={discardCreateTaskBox}>
        Discard{" "}
      </button>
      <button
        className="add-btn"
        onClick={() => {

          if(task != "" && task != undefined){
            discardCreateTaskBox();
            addNewTodo(task);
          }
        }}
      >
        Add
      </button>
    </div>
  );
}

export default TaskCreator;
