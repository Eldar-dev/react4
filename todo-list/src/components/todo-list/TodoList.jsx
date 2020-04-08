import React from "react";
import TodoListItem from "../todo-list-item/TodoListItem";
import "./todo-list.css";

const TodoList = ({ todos, onDelete, onToggle, onImpot }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onDelete={() => onDelete(id)}
          onToggle={() => onToggle(id)}
          onImpot={() => onImpot(id)}
        />
      </li>
    );
  });
  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
