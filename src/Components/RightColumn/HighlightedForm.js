import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import './HighlightedForm.css';

import mapLanguage from "../../modules/mapLanguage";
import * as processInput from "../../modules/languages";
import * as React from "react";

function formatForHighlighting(inputFields) {
  return inputFields.map(field => [mapLanguage(field.language), field.value]);
}

function highlight(inputFields) {
  let formattedData = formatForHighlighting(inputFields);
  let result = '';
  for (let [language, code] of formattedData) result += processInput[language](code);
  return result;
}

export default function HighlightedForm() {
  const inputFields = useSelector(state => state.inputFields);
  const timeoutRef = useRef(null);
  const [value, setValue] = useState('');

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(handleTextarea, 500);
  }, [inputFields])

  useEffect(() => {
    function processCopyClipboardShortcut(e) {
      console.log(e);
    }
    window.addEventListener('keypress', processCopyClipboardShortcut);
    return () => window.removeEventListener('keypress', processCopyClipboardShortcut);
  }, [])



  function handleTextarea() {
    setValue(highlight(inputFields))
  }

  function handleClipboardCopying(e) {
    navigator.clipboard.writeText(value);
    e.preventDefault()
  }

  return <form className="highlightedForm">
    <button onClick={handleClipboardCopying}>Скопировать (ctrl+shift+c)</button>
    <textarea value={value} readOnly/>
  </form>
}