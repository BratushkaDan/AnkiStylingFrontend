import * as React from 'react';
import Form from "./Form";

import './FormField.css';

import { addField } from "./FormField.slice";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

function useTopOffset(initialState, ref) {
  const [offset, setOffset] = React.useState(initialState);

  React.useLayoutEffect(() => {
    setOffset(ref.current.offsetTop + 'px');
  }, [ref])

  return offset;
}

function FormField(props, ref) {
  const inputFields = useSelector(state => state.inputFields);
  const dispatch = useDispatch();

  const fieldOffset = useTopOffset('15%', ref);

  useEffect(() => {
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