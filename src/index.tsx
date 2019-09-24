import * as React from "react";
import { render } from "react-dom";
import Tabs from "./tabs";

import "./styles.css";

function App() {
  return (
    <div className="app">
      <Tabs />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
