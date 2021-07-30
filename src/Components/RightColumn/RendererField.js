import {useState, useEffect, useRef, forwardRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import './RendererField.scss';


import * as highlightSyntax from "../../modules/anki/highlight.js";

import {useTopWindowOffset, useShortcut} from "../../hooks/hooks";
import {wipeFields} from "../LeftColumn/FormField.slice";

function formatForHighlighting(inputFields) {
  return inputFields.map(field => [(field.language === null) ? 'comment' : field.language, field.value]);
}

async function highlight(inputFields) {
  let formattedData = formatForHighlighting(inputFields);
  let result = '';
  for (let [language, code] of formattedData) result += await highlightSyntax[language](code);
  return result;
}

function RendererField(props, ref) {
  const inputFields = useSelector(state => state.inputFields);
  const timeoutRef = useRef(null);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const offset = useTopWindowOffset('20vh', ref);

  // useShortcut(handleClipboardCopying, ['control', 'shift', 'u'], [value]);
  // useShortcut(handleClear, ['control', 'shift', 'h'], []);

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(handleTextarea);
  }, [inputFields])

  function handleTextarea() {
    highlight(inputFields).then(value => setValue(value));
  }

  function handleClipboardCopying(e) {
    navigator.clipboard.writeText(value);
    e?.preventDefault()
  }

  function handleClear(e) {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(handleTextarea);
    dispatch(wipeFields());
    e?.preventDefault();
  }

  return <>
    <button onClick={handleClipboardCopying}>Скопировать{/* (ctrl+shift+u)*/}</button>
    <button onClick={handleClear}>Очистить{/* (ctrl + shift + h)*/}</button>
    <div className="rendererField" ref={ref} style={{height: `calc(100vh - ${offset})`}} dangerouslySetInnerHTML={{__html: value}}/>
  </>
}

export default forwardRef(RendererField);