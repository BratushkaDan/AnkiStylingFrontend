import * as React from "react";

import './App.scss';

import LeftColumn from "./Components/LeftColumn";
import RightColumn from "./Components/RightColumn";
import RendererField from "./Components/RightColumn/RendererField";
import Menu from "./Components/LeftColumn/Menu";
import FormField from "./Components/LeftColumn/FormField";

function App() {
  return (
    <div className="App">
      <LeftColumn>
        <h1>Input</h1>
        <Menu/>
        <FormField/>
      </LeftColumn>
      <RightColumn>
        <h1>Output</h1>
        <RendererField/>
      </RightColumn>
    </div>

  );
}

export default App;