import * as React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import './RendererField.scss';

import MarkupContainer from "./MarkupContainer";

import {useTopWindowOffset, useShortcut} from "../../hooks/hooks";
import {wipeFields} from "../../slices/Field.slice";

export default function RendererField() {
  const [isShowBoth, setIsShowBoth] = React.useState(true);
  const inputFields = useSelector(state => state.inputFields);
  const currentCardSide = useSelector(state => state.cardSide);
  const dispatch = useDispatch();
  const rendererFieldRef = React.useRef(null);
  const offset = useTopWindowOffset('20vh', rendererFieldRef);

  useShortcut(copyToClipboard, ['control', 'shift', 'u'], [inputFields]);
  useShortcut(handleClear, ['control', 'shift', 'h'], []);

  function copyFrontToClipboard(e) {
    navigator.clipboard.writeText(inputFields.filter(field => field.side === 'front').map(field => field.highlightedMarkup).join(''));
    e?.preventDefault()
  }

  function copyBackToClipboard(e) {
    navigator.clipboard.writeText(inputFields.filter(field => field.side === 'back').map(field => field.highlightedMarkup).join(''));
    e?.preventDefault()
  }

  function copyToClipboard(e) {
    navigator.clipboard.writeText(inputFields.map(field => field.highlightedMarkup).join(''));
    e?.preventDefault()
  }

  function handleClear(e) {
    dispatch(wipeFields());
    e?.preventDefault();
  }

  function renderMarkupContainers(inputFields) {
    if (isShowBoth) {
      return inputFields.map(field => <MarkupContainer key={field.id} value={field.highlightedMarkup}/>)
    }
    return inputFields.filter(field => field.side === currentCardSide).map(field => <MarkupContainer key={field.id} value={field.highlightedMarkup}/>)
  }

  return <>
    <p className="btnContainer">
      <label>
        Show Both Card Sides:
        <input type="checkbox" checked={isShowBoth} onChange={() => setIsShowBoth(prevState => !prevState)}/>
      </label>
      <button onClick={copyFrontToClipboard}>Copy Front{/* (ctrl+shift+u)*/}</button>
      <button onClick={copyBackToClipboard}>Copy Back{/* (ctrl+shift+u)*/}</button>
      <button onClick={copyToClipboard}>Copy Both{/* (ctrl+shift+u)*/}</button>
      <button className="clearBtn" onClick={handleClear}>Clear{/* (ctrl + shift + h)*/}</button>
    </p>
    <div className="rendererField" ref={rendererFieldRef} style={{height: `calc(100vh - ${offset})`}}>
      {renderMarkupContainers(inputFields)}
    </div>
  </>
}