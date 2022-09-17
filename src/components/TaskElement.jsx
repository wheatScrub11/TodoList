import React from "react";
import { useState } from "react";
import "./TaskElement.css";
import { BsTrash, BsCheck2Circle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";

function TaskElement({ todo, deleteTodo, editTodo }) {
  const [editableTask, setEditableTask] = useState("");
  const [showEditTask, setShowEditTask] = useState(true);
  const [doneTask, setDoneTask] = useState(false);
  return (
    <>
      {showEditTask ? (
        <div className={`task-container ${doneTask ? "done" : "undone"}`}>
          <div
            className="task-text"
            style={doneTask ? { color: "black" } : { color: "white" }}
          >
            {todo.task}
          </div>

          <div className="btns-container">
            <BsTrash
              className="delete-btn btn"
              onClick={() => deleteTodo(todo.id)}
            />
            <AiOutlineEdit
              className="edit-btn btn"
              onClick={() => setShowEditTask(!showEditTask)}
            />
            <BsCheck2Circle
              className="done-btn btn"
              onClick={() => setDoneTask(!doneTask)}
            />
          </div>
        </div>
      ) : (
        <div className="editbox-container">
          <textarea
            className="text-area"
            rows={5}
            placeholder={todo.task}
            onChange={(e) => setEditableTask(e.target.value)}
          ></textarea>
          <div>
            <button
              className="discard-btn"
              onClick={() => setShowEditTask(!showEditTask)}
            >
              Discard
            </button>
            <button
              className="save-btn"
              onClick={() => {
                if (editableTask != "" && editableTask != undefined) {
                  setShowEditTask(!showEditTask);
                  editTodo(todo.id, editableTask);
                  setEditableTask(""); // If i edit the text area once with something != "" and save it, the next time i try to save it its gonna allow me to save even if the text area is empty because "editableTask" has a previous saved value, so HERE, im making sure to reset the editedTask to empty so it doesnt cause any error
                }
              }}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default TaskElement;
