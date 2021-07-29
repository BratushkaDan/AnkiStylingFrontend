import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";

import './FormField.css';

import Form from "./Form";
import { addField } from "./FormField.slice";
import {useTopWindowOffset} from "../../hooks/hooks";


function FormField(props, ref) {
  const inputFields = useSelector(state => state.inputFields);
  const dispatch = useDispatch();

  const fieldOffset = useTopWindowOffset('20vh', ref);

  React.useEffect(() => {
    dispatch(addField('comment'));
  }, [dispatch]);

  function processInputFields() {
    return inputFields.map(obj => <Form key={obj.id} {...obj}/>)
  }

  return <div ref={ref} className="formField" style={{ height: `calc(100vh - ${fieldOffset})`}}>
    {processInputFields()}
  </div>
}

export default React.forwardRef(FormField);