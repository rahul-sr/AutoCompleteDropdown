import React from "react";
import { render } from "react-dom";
import AutoComplete from "./AutoComplete";
import { data } from "./data";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <h2>AutoComplete Selectbox</h2>
    <AutoComplete list={data} />
  </div>
);

render(<App />, document.getElementById("root"));
