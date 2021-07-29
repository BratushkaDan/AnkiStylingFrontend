import {useRef} from "react";

import Menu from './LeftColumn/Menu';
import FormField from "./LeftColumn/FormField";

import './LeftColumn.css';

export default function LeftColumn() {
  const formFieldRef = useRef(null);

  return (<div className="leftColumn">
    <h1>Input</h1>
    <Menu/>
    <FormField ref={formFieldRef}/>
  </div>)
}