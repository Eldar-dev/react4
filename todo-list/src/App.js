import React, { Component } from "react";
import AppHeader from "./components/app-header/AppHeader";
import { SearchPanel } from "./components/search-panel/SearchPanel";
import TodoList from "./components/todo-list/TodoList";
import AddForm from "./components/add-form/AddForm";
import ItemStatusFilter from "./components/item-status-filter/ItemStatusFilter";

import "./App.css";

class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      { label: "Drink Coffee", important: false, id: 1, done: false },
      { label: "Make Awesome App", important: false, id: 2, done: false },
      { label: "Have a lunch", important: false, id: 3, done: false },
    ],
    filterName: "all",
    keyName: "",
  };

  onDelete = (id) => {
    this.setState((prevState) => {
      const todos = prevState.todoData.filter((todo) => todo.id !== id);
      return {
        todoData: todos,
      };
    });
  };

  createTodo = (label) => {
    return {
      label,
      important: false,
      id: ++this.maxId,
      done: false,
    };
  };

  onAdded = (label) => {
    this.setState((prev) => {
      return {
        todoData: [...prev.todoData, this.createTodo(label)],
      };
    });
  };

  onToggle = (id) => {
    this.setState((prevState) => {
      const todos = prevState.todoData.map((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
        return todo;
      });
      return {
        todoData: todos,
      };
    });
  };

  onImpot = (id) => {
    this.setState((prevState) => {
      const todos = prevState.todoData.map((todo) => {
        if (todo.id === id) {
          todo.important = !todo.important;
        }
        return todo;
      });
      return {
        todoData: todos,
      };
    });
  };

  filterItem = (filterName) => {
    this.setState({ filterName });
  };

  filterChange = (todoData, word) => {
    const filters = todoData.filter((todo) => {
      switch (word) {
        case "all":
          return todo;
        case "active":
          if (!todo.done) return todo;
          else break;
        case "done":
          if (todo.done) return todo;
          else break;
        default:
      }
    });
    return filters;
  };

  searchImput = (keyName) => {
    this.setState({ keyName });
  };

  render() {
    const { todoData, filterName, keyName } = this.state;
    const done = todoData.filter((todo) => todo.done).length;
    const toDo = todoData.length - done;
    const todoNewSearch = todoData.filter((todo) => {
      if (todo.label.toLowerCase().includes(keyName.toLowerCase())) return todo;
    });
    const todoFilter = this.filterChange(todoNewSearch, filterName);
    return (
      <div className="todo-app">
        <AppHeader toDo={toDo} done={done} />
        <div className="top-panel d-flex">
          <SearchPanel onSearch={this.searchImput} />
          <ItemStatusFilter filterItem={this.filterItem} />
        </div>
        <TodoList
          todos={todoFilter}
          onDelete={this.onDelete}
          onToggle={this.onToggle}
          onImpot={this.onImpot}
        />
        <AddForm onAdded={this.onAdded} />
      </div>
    );
  }
}

export default App;
