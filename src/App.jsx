import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TaskCreator from "./components/TaskCreator";
import TaskElement from "./components/TaskElement";

function App() {
  const [showNewTaskButton, setShowNewTaskButton] = useState(true);
  const [todoList, setTodoList] = useState([]);

  const createNewTask = () => {
    setShowNewTaskButton(!showNewTaskButton);
  };

  const addNewTodo = (task) => {
    const newTodo = {
      id: todoList.length == 0 ? 1 : todoList[todoList.length - 1].id + 1,
      task: task,
    };

    setTodoList([...todoList, newTodo]);
  };

  const deleteTodo = (taskID) => {
    setTodoList(todoList.filter((todo) => todo.id !== taskID));
  };

  const editTodo = (taskID, editedTodo) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id == taskID) {
          // DONT KNOW WHY I CANNOT USE TERNARY OPERATOR
          return { id: todo.id, task: editedTodo };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div className="App">
      {showNewTaskButton ? (
        <button className="add-task-button" onClick={createNewTask}>
          Add new task
        </button>
      ) : (
        <TaskCreator
          discardCreateTaskBox={createNewTask}
          addNewTodo={addNewTodo}
        />
      )}

      <div className="tasks">
        {todoList.map((todo, key) => {
          return (
            <TaskElement
              key={key}
              todo={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
