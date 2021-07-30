import * as React from 'react';
import {useDispatch} from "react-redux";
import PropTypes from 'prop-types';

import {modifyField, removeField} from "./FormField.slice";

import "./Form.scss";

function Form(props) {
  const [fieldHeight, setFieldHeight] = React.useState('131px');
  const {value} = props.value;
  const dispatch = useDispatch();
  const textAreaRef = React.useRef(null);

  function handleTextarea(e) {
    dispatch(modifyField({value: e.currentTarget.value, id: props.id}))
    setFieldHeight(`${textAreaRef.current.scrollHeight}px`);
    e.preventDefault();
  }

  let hint = props.type === 'comment' ? 'Comment' : `Code (${props.language})`;

  function handleRemoval() {
    dispatch(removeField(props.id))
  }

  return <form className={`form-leftColumn form-leftColumn-${props.type}`}>
    <div className="form-leftColumn__caption"><span className="hint">{hint}:</span><span className="removeField" onClick={handleRemoval}>🗑️</span></div>
    <textarea
      className="form-leftColumnTextarea"
      ref={textAreaRef}
      value={value}
      onChange={handleTextarea}
      style={{height: fieldHeight}}
      placeholder={hint}/>
  </form>
}

Form.propTypes = {
  type: PropTypes.oneOf(['comment', 'code'])
}

export default React.memo(Form);