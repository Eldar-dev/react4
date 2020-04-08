import React, { Component } from "react";

import "./item-status-filter.css";

const Change = {
  All: "all",
  Active: "active",
  Done: "done",
};

class ItemStatusFilter extends Component {
  state = { ...Change, All: "all new" };

  filterToggle = ({ target: { className } }) => {
    for (const key in Change) {
      if (className.includes(Change[key])) {
        const temp = Change[key];
        this.props.filterItem(temp);
        this.setState({ ...Change, [key]: `${temp} new` });
      }
    }
  };

  render() {
    const Arry = [];
    for (const key in this.state) {
      Arry.push(<button className={this.state[key]}>{key}</button>);
    }
    return (
      <div className="btn-info" onClick={this.filterToggle}>
        {Arry}
      </div>
    );
  }
}

export default ItemStatusFilter;
