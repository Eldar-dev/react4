import React, { Component } from "react";

import "./todo-list-item.css";

class TodoListItem extends Component {
  toggleDone() {
    this.props.onToggle();
  }

  removeHandler() {
    this.props.onDelete();
  }

  removeImpot() {
    this.props.onImpot();
  }

  render() {
    const { important, label, done } = this.props;

    const style = {
      color: important ? "steelblue" : "black",
      fontWeight: important ? "bold" : "normal",
    };

    let className = `todo-list-item`;

    if (done) {
      className += " done";
    }
    return (
      <span className={className}>
        <span
          className="todo-list-item-label"
          style={style}
          onClick={() => this.toggleDone()}
        >
          {label}
        </span>
        <div className="remBtn">
          <button
            type="button"
            className="btn btn-outline-danger btn-sm float-right"
            onClick={() => this.removeHandler()}
          >
            Delete
          </button>
          <button
            type="button"
            className="btn btn-outline-success btn-sm float-right"
            onClick={() => this.removeImpot()}
          >
            !
          </button>
        </div>
      </span>
    );
  }
}
export default TodoListItem;
