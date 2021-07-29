import * as React from 'react';
import RendererField from "./RightColumn/RendererField";

export default function RightColumn() {
  const rendererRed = React.useRef(null);

  return (<div className="rightColumn">
    <h1>Output</h1>
    <RendererField ref={rendererRed}/>
  </div>)
}