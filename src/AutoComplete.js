import React, { Component } from "react";
import PropTypes from "prop-types";
import "./css/autoComplete.css";

export default class AutoComplete extends Component {
  static propTypes = { prop: PropTypes };

  constructor(props) {
    super(props);
    this.state = { showOptions: false, selected: { id: 0, name: "Select" } };
  }

  toggleOptions = evt => {
    this.setState({
      showOptions: !this.state.showOptions
    });
  };

  selectItem = evt => {
    const currentTarget = evt.currentTarget;
    this.setState({
      showOptions: false,
      selected: { id: currentTarget.id, name: currentTarget.textContent }
    });
  };

  render() {
    let listEle = this.props.list.map(val => {
      return (
        <li key={val.id} id={val.id} onClick={this.selectItem}>
          {val.name}
        </li>
      );
    });
    let showlistEle = this.state.showOptions ? listEle : null;
    return (
      <div className="auto-complete" onBlur={this.toggleOptions}>
        <span onClick={this.toggleOptions}>
          {this.state.selected.name}
          <svg width="12" height="12">
            <path d="M0 0 L5 6 L10 0" />
          </svg>
        </span>
        <input type="text" />
        <ul>{showlistEle}</ul>
      </div>
    );
  }
}
