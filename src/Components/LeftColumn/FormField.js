import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";

import './FormField.scss';

import {Form} from "./Form";
import {addField} from "../../slices/Field.slice";
import {useTopWindowOffset} from "../../hooks";


export default function FormField() {
  const inputFields = useSelector(state => state.inputFields);
  const currentCardSide = useSelector(state => state.cardSide);
  const dispatch = useDispatch();

  const formFieldRef = React.useRef(null);
  const fieldOffset = useTopWindowOffset('20vh', formFieldRef);

  React.useEffect(() => {
    dispatch(addField({type: 'comment', side: 'front'}));
  }, [dispatch]);

  function processInputFields() {
    return inputFields.filter(field => field.side === currentCardSide).map(field => <Form key={field.id} {...field}/>)
  }

  return <div ref={formFieldRef} className="formField" style={{height: `calc(100vh - ${fieldOffset})`}}>
    {processInputFields()}
  </div>
}