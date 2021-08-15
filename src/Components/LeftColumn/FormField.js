import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";

import './FormField.scss';

import Form from "./Form";
import {addField} from "../../slices/Field.slice";
import {useTopWindowOffset} from "../../hooks/hooks";


export default function FormField() {
  const inputFields = useSelector(state => state.inputFields);
  const dispatch = useDispatch();
  const formFieldRef = React.useRef(null);
  const fieldOffset = useTopWindowOffset('20vh', formFieldRef);

  React.useEffect(() => {
    dispatch(addField({type: 'comment'}));
  }, [dispatch]);

  function processInputFields() {
    return inputFields.map(field => <Form key={field.id} {...field}/>)
  }

  return <div ref={formFieldRef} className="formField" style={{height: `calc(100vh - ${fieldOffset})`}}>
    {processInputFields()}
  </div>
}