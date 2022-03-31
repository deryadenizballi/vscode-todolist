import React, { useState } from "react";
import { useTodoLayerValue } from "./context/todoContext";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";
import "./App.css";

const App = () => {
  const [{ todos }, dispatch] = useTodoLayerValue();
  const [content, setContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!content) return;
    const newTodo = {
      id: Math.floor(Math.random() * 65456132),
      content,
      isCompleted: false,
    };

    dispatch({
      type: "ADD_TODO",
      payload: newTodo,
    });
    setContent("");
  };

  return (
    <div className="container">
      <div className="todo__box">
      <h2>Todo </h2>
        <form onSubmit={handleSubmit} className={"todo-form"}>
        
          <input
            className="todo-input"
            type="text"
            onChange={(event) => setContent(event.target.value)}
            value={content}
          ></input>

          <button className="todo-button">Ekle</button>
        </form>

        {}
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default App;
