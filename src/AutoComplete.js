import React, { Component } from "react";
//import PropTypes from "prop-types";
import "./css/autoComplete.css";

export default class AutoComplete extends Component {
  //static propTypes = { prop: PropTypes };

  constructor(props) {
    super(props);
    this.state = {
      showOptions: false,
      selected: { id: 0, name: "Select" },
      searchBox: false,
      filter: ""
    };

    document.addEventListener("click", this.handleOutsideClick, false);
  }

  handleOutsideClick = evt => {
    // ignore clicks on the component itself
    if (this.node.contains(evt.target)) {
      return;
    }
    this.setState({ showOptions: false, searchBox: false, filter: "" });
  };

  toggleOptions = evt => {
    this.setState({
      showOptions: !this.state.showOptions,
      searchBox: !this.state.searchBox
    });
  };

  selectItem = evt => {
    const currentTarget = evt.currentTarget;
    this.setState({
      showOptions: false,
      selected: {
        id: currentTarget.id,
        name: currentTarget.textContent
      }
    });
  };

  showOptions = evt => {
    evt.stopPropagation();
    this.setState({ showOptions: true, filter: evt.currentTarget.textContent });
  };

  search = evt => {
    this.setState({
      filter: evt.currentTarget.value
    });
  };

  searchBox = () => {
    return (
      <input
        onClick={this.showOptions}
        onKeyUp={this.search}
        className="search-box"
        type="text"
        placeholder="Select"
      />
    );
  };

  selectedItem = () => {
    return <span>{this.state.selected.name}</span>;
  };

  optionsList = () => {
    const filteredList = this.props.list.filter(val =>
      val.name.includes(this.state.filter)
    );
    const optionsList = filteredList.map(val => {
      return (
        <li key={val.id} id={val.id} onClick={this.selectItem}>
          {val.name}
        </li>
      );
    });
    const optionsListWrapper = this.state.showOptions ? (
      <ul>{optionsList}</ul>
    ) : null;
    return optionsListWrapper;
  };

  arrow = () => {
    return (
      <svg width="12" height="12">
        <path d="M0 0 L5 6 L10 0" />
      </svg>
    );
  };

  render() {
    const searchBox = this.state.searchBox
      ? this.searchBox()
      : this.selectedItem();
    return (
      <div
        className="auto-complete"
        onClick={this.toggleOptions}
        ref={node => {
          this.node = node;
        }}
      >
        <div className="selected">
          {searchBox} {this.arrow()}
        </div>
        {this.optionsList()}
      </div>
    );
  }
}
