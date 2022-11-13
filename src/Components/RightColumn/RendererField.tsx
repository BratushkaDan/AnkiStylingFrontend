import {useState, useRef, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { Button, Switch } from '@mui/material';

import './RendererField.scss';

import MarkupContainer from "./MarkupContainer";

import {useTopWindowOffset} from "../../hooks";
import {wipeFields} from "../../slices/Field.slice";

export default function RendererField() {
  const [isShowBoth, setIsShowBoth] = useState(true);
  const inputFields = useSelector((state: any) => state.inputFields);
  const currentCardSide = useSelector((state: any) => state.cardSide);
  const dispatch = useDispatch();
  const rendererFieldRef = useRef(null);
  const offset = useTopWindowOffset('20vh', rendererFieldRef);

  const copyFrontToClipboard = useCallback((e: any) => {
    navigator.clipboard.writeText(inputFields.filter((field: any) => field.side === 'front').map((field: any) => field.highlightedMarkup).join(''));
    e?.preventDefault()
  }, [inputFields])

  const copyBackToClipboard = useCallback((e: any) => {
    navigator.clipboard.writeText(inputFields.filter((field: any) => field.side === 'back').map((field: any) => field.highlightedMarkup).join(''));
    e?.preventDefault()
  }, [inputFields])

  const copyToClipboard = useCallback((e: any) => {
    navigator.clipboard.writeText(inputFields.map((field: any) => field.highlightedMarkup).join(''));
    e?.preventDefault()
  }, [inputFields])

  const handleClear = useCallback((e: any) => {
    dispatch(wipeFields());
    e?.preventDefault();
  }, [])

  const toggleShowBoth = useCallback(() => setIsShowBoth(prevState => !prevState), [])

  function renderMarkupContainers(inputFields: any) {
    if (isShowBoth) {
      return inputFields.map((field: any) => <MarkupContainer key={field.id} value={field.highlightedMarkup}/>)
    }
    return inputFields.filter((field: any) => field.side === currentCardSide).map((field: any) => <MarkupContainer key={field.id} value={field.highlightedMarkup}/>)
  }

  return <>
    <p className="btnContainer">
      <label>
        Показать обе стороны карточки:
        <Switch
          checked={isShowBoth}
          onChange={toggleShowBoth}
        />
      </label>
      <Button variant="outlined" size="small" onClick={copyFrontToClipboard}>
        Скопировать переднюю часть{/* (ctrl+shift+u)*/}
      </Button>
      <Button variant="outlined" size="small" onClick={copyBackToClipboard}>
        Скопировать заднюю часть{/* (ctrl+shift+u)*/}
      </Button>
      <Button variant="outlined" size="small" onClick={copyToClipboard}>
        Скопировать все тело карточки{/* (ctrl+shift+u)*/}
      </Button>
      <Button variant="outlined" size="small" color="error" onClick={handleClear}>
        Очистить содержимое{/* (ctrl + shift + h)*/}
      </Button>
    </p>
    <div className="rendererField" ref={rendererFieldRef} style={{height: `calc(100vh - ${offset})`}}>
      {renderMarkupContainers(inputFields)}
    </div>
  </>
}