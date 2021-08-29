import * as React from 'react';
import {useDispatch} from "react-redux";
import PropTypes from 'prop-types';

import {modifyField, moveFieldDown, moveFieldUp, removeField} from "../../slices/Field.slice";

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

  function preventKeydownBubbling(e) {
    e.stopPropagation();
  }

  let hint = props.type === 'comment' ? 'Comment' : `Code (${props.language})`;

  function handleMoveFieldUp() {
    dispatch(moveFieldUp(props.id))
  }

  function handleMoveFieldDown() {
    dispatch(moveFieldDown(props.id))
  }

  function handleRemoval() {
    dispatch(removeField(props.id))
  }

  return <form className={`form-leftColumn form-leftColumn-${props.type}`}>
    <div className="form-leftColumn__caption">
      <span className="hint">{hint}:</span>
      <span className="controlsContainer">
        <span onClick={handleMoveFieldUp}>⬆️</span>
        <span onClick={handleMoveFieldDown}>⬇️</span>
        <span onClick={handleRemoval}>🗑️</span>
      </span>
    </div>
    <textarea
      className="form-leftColumnTextarea"
      ref={textAreaRef}
      value={value}
      onKeyDown={preventKeydownBubbling}
      onChange={handleTextarea}
      style={{height: fieldHeight}}
      placeholder={hint}/>
  </form>
}

Form.propTypes = {
  type: PropTypes.oneOf(['comment', 'code'])
}

export default React.memo(Form);