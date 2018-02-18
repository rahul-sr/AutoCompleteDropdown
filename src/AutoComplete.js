import React from "react";
import "../css/autoComplete.css";

function show() {
 
}

export default ({ list }) => {
  let listEle = list.map(val => {
    return <li>{val.name}</li>;
  });
  return (
    <div className="auto-complete">
      <span onClick={show}>Selected</span>
      <svg width="12" height="12">
        <path d="M0 0 L5 6 L10 0"></path>
      </svg>
      <input type="text" />
      <ul>{listEle}</ul>
    </div>
  );
};
