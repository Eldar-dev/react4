import React, { Component } from "react";

import "./add-form.css";

class AddForm extends Component {
  state = {
    label: "",
  };

  onChange({ target: { value } }) {
    this.setState({ label: value });
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdded(this.state.label);
    this.setState({ label: "" });
  };
  render() {
    return (
      <form className="addSaveNew" onSubmit={this.onSubmit}>
        <input
          className="addNew"
          type="text"
          value={this.state.label}
          onChange={(e) => this.onChange(e)}
        />
        <button className="addBtn">Add</button>
      </form>
    );
  }
}

export default AddForm;
