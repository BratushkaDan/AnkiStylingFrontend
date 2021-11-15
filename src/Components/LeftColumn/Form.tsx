import * as React from 'react';
import {useDispatch} from "react-redux";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DeleteIcon from '@mui/icons-material/Delete'; 

import { languageSelectOptions } from '../../common/languageSelectOptions';
import {modifyField, moveFieldDown, moveFieldUp, removeField} from "../../slices/Field.slice";

import "./Form.scss";

const getLanguageAlias = (language: keyof typeof languageSelectOptions) => languageSelectOptions[language]

interface Props {
  language: keyof typeof languageSelectOptions;
  side: 'front' | 'back';
  type: 'comment' | 'code';
  id: 'string';
  value: 'string';
}

let Form: React.FC<Props> = ({
  id,
  language,
  type,
  side,
  value
}) => {

  const [fieldHeight, setFieldHeight] = React.useState('131px');
  const dispatch = useDispatch();
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);
  const hintRef = React.useRef<HTMLSpanElement>(null);

/*   const dndHandler = React.useCallback((e: MouseEvent) => {
    console.log(e.clientX, e.clientY);
  }, []);

  React.useEffect(() => {
    hintRef.current?.addEventListener('mousedown', dndHandler);
    hintRef.current?.addEventListener('mouseup', dndHandler);
    
    return () => {
      hintRef.current!.removeEventListener('mousedown', dndHandler);
      hintRef.current!.removeEventListener('mouseup', dndHandler);
    }
  }, []); */

  function handleTextarea(e: React.FormEvent<HTMLTextAreaElement>) {
    dispatch(modifyField({value: e.currentTarget!.value, id}))
    setFieldHeight(`${textAreaRef.current!.scrollHeight}px`);
    e.preventDefault();
  }

  function preventKeydownBubbling(e: React.FormEvent<HTMLTextAreaElement>) {
    e.stopPropagation();
  }

  let hint = type === 'comment' ? `Comment` : `Code (${getLanguageAlias(language)})`;

  function handleMoveFieldUp() {
    dispatch(moveFieldUp(id))
  }

  function handleMoveFieldDown() {
    dispatch(moveFieldDown(id))
  }

  function handleRemoval() {
    dispatch(removeField(id))
  }

  return (
    <form
      className={`form-leftColumn form-leftColumn-${type}`}
      data-side={side}
    >
      <div className="form-leftColumn__caption">
        <span
          className="hint"
          ref={hintRef}
        >
          {hint}:
        </span>
        <span className="controlsContainer">
          <span title="Move block upward">
            <ArrowUpwardIcon onClick={handleMoveFieldUp} />
          </span>
          <span title="Move block downward">
            <ArrowDownwardIcon onClick={handleMoveFieldDown} />
          </span>
          <span title="Remove block">
            <DeleteIcon onClick={handleRemoval} />
          </span>
        </span>
      </div>
      <textarea
        className="form-leftColumnTextarea"
        ref={textAreaRef}
        value={value}
        onKeyDown={preventKeydownBubbling}
        onChange={handleTextarea}
        style={{height: fieldHeight}}
        placeholder={hint}
      />
    </form>);
};

Form = React.memo(Form);

export { Form };