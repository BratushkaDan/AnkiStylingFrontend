import {useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import './RendererField.scss';

import MarkupContainer from "./MarkupContainer";

import {useTopWindowOffset, useShortcut} from "../../hooks/hooks";
import {wipeFields} from "../../slices/Field.slice";

export default function RendererField() {
  const inputFields = useSelector(state => state.inputFields);
  const dispatch = useDispatch();
  const rendererFieldRef = useRef(null);
  const offset = useTopWindowOffset('20vh', rendererFieldRef);

  useShortcut(handleClipboardCopying, ['control', 'shift', 'u'], [inputFields]);
  useShortcut(handleClear, ['control', 'shift', 'h'], []);

  function handleClipboardCopying(e) {
    navigator.clipboard.writeText(inputFields.map(field => field.highlightedMarkup).join(''));
    e?.preventDefault()
  }

  function handleClear(e) {
    dispatch(wipeFields());
    e?.preventDefault();
  }

  function renderMarkupContainers(inputFields) {
    return inputFields.map(field => <MarkupContainer key={field.id} value={field.highlightedMarkup}/>)
  }

  return <>
    <button onClick={handleClipboardCopying}>Copy{/* (ctrl+shift+u)*/}</button>
    <button onClick={handleClear}>Clear{/* (ctrl + shift + h)*/}</button>
    <div className="rendererField" ref={rendererFieldRef} style={{height: `calc(100vh - ${offset})`}}>
      {renderMarkupContainers(inputFields)}
    </div>
  </>
}