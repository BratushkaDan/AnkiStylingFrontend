import {useState, useEffect, useRef, forwardRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './RendererField.scss';

import mapLanguage from "../../modules/mapLanguage";
import * as processInput from "../../modules/languages";

import {useTopWindowOffset, useShortcut} from "../../hooks/hooks";
import {wipeFields} from "../LeftColumn/FormField.slice";

function formatForHighlighting(inputFields) {
  return inputFields.map(field => [mapLanguage(field.language), field.value]);
}

function highlight(inputFields) {
  let formattedData = formatForHighlighting(inputFields);
  let result = '';
  for (let [language, code] of formattedData) result += processInput[language](code);
  return result;
}

function RendererField(props, ref) {
  const inputFields = useSelector(state => state.inputFields);
  const timeoutRef = useRef(null);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const offset = useTopWindowOffset('20vh', ref);

  useShortcut(handleClipboardCopying, ['control', 'shift', 'u'], [value]);
  useShortcut(handleClear, ['control', 'shift', 'h'], []);

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(handleTextarea);
  }, [inputFields])

  function handleTextarea() {
    setValue(highlight(inputFields))
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
    <button onClick={handleClipboardCopying}>Скопировать (ctrl+shift+u)</button>
    <button onClick={handleClear}>Очистить (ctrl + shift + h)</button>
    <div className="rendererField" ref={ref} style={{height: `calc(100vh - ${offset})`}}  dangerouslySetInnerHTML={{__html: value}}/>
  </>
}

export default forwardRef(RendererField);