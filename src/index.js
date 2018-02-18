import React from "react";
import { render } from "react-dom";
import AutoComplete from "./AutoComplete";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const data = [
  { id: 1, name: "test1" },
  { id: 2, name: "test2" },
  { id: 3, name: "test3" }
];

const App = () => (
  <div style={styles}>
    <h2>AutoComplete Selectbox</h2>
    <AutoComplete list={data} />
  </div>
);

render(<App />, document.getElementById("root"));
