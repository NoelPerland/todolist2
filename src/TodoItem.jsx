import React from "react";
import "./TodoItem.css";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.done ? "done" : ""}`}>
      <span>{todo.title}</span>
      <button onClick={() => onToggle(todo.id)}>
        {todo.done ? "Undo" : "Done"}
      </button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
