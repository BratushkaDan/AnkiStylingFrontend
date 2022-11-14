import styled from 'styled-components';
import { useState, useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Switch } from '@mui/material';

import '../../modules/anki/anki-styles/programming.scss';

import MarkupContainer from './MarkupContainer';

import { useTopWindowOffset } from '../../hooks';
import { wipeFields } from '../../slices/Field.slice';

const StyledRendererField = styled.div`
  .btnContainer {
    & > * {
      cursor: pointer;
      &:not(:last-child) {
        margin-right: 0.3em;
      }
      &:last-child {
        @media (min-width: 1250px) {
          margin-left: 1em;
        }
      }
    }

    & .btn {
      display: inline-block;

      margin-top: 10px;
    }

    @media (max-width: );
  }

  .rendererField {
    color: var(--code-base-color);
    overflow-x: auto;
    margin-top: 10px;
    background-color: var(--code-background);
    box-sizing: border-box;
  }

  .rendererField::-webkit-scrollbar {
    background: hsl(240, 2%, 8%);
    width: 0.7rem;
    height: 0.7rem;
  }
  .rendererField::-webkit-scrollbar-corner {
    background: hsl(240, 2%, 5%);
  }
  .rendererField::-webkit-scrollbar-thumb {
    background: hsl(240, 2%, 4%);
  }
`;

export const RendererField = () => {
  const [isShowBoth, setIsShowBoth] = useState(true);
  const inputFields = useSelector((state: any) => state.inputFields);
  const currentCardSide = useSelector((state: any) => state.cardSide);
  const dispatch = useDispatch();
  const rendererFieldRef = useRef(null);
  const offset = useTopWindowOffset('20vh', rendererFieldRef);

  const copyFrontToClipboard = useCallback(
    (e: any) => {
      navigator.clipboard.writeText(
        inputFields
          .filter((field: any) => field.side === 'front')
          .map((field: any) => field.highlightedMarkup)
          .join('')
      );
      e?.preventDefault();
    },
    [inputFields]
  );

  const copyBackToClipboard = useCallback(
    (e: any) => {
      navigator.clipboard.writeText(
        inputFields
          .filter((field: any) => field.side === 'back')
          .map((field: any) => field.highlightedMarkup)
          .join('')
      );
      e?.preventDefault();
    },
    [inputFields]
  );

  const copyToClipboard = useCallback(
    (e: any) => {
      navigator.clipboard.writeText(inputFields.map((field: any) => field.highlightedMarkup).join(''));
      e?.preventDefault();
    },
    [inputFields]
  );

  const handleClear = useCallback((e: any) => {
    dispatch(wipeFields());
    e?.preventDefault();
  }, []);

  const toggleShowBoth = useCallback(() => setIsShowBoth((prevState) => !prevState), []);

  // FIXME: оптимизировать
  function renderMarkupContainers(inputFields: any) {
    if (isShowBoth) {
      return inputFields.map((field: any) => <MarkupContainer key={field.id} value={field.highlightedMarkup} />);
    }
    return inputFields
      .filter((field: any) => field.side === currentCardSide)
      .map((field: any) => <MarkupContainer key={field.id} value={field.highlightedMarkup} />);
  }

  return (
    <StyledRendererField>
      <p className="btnContainer">
        <label>
          Показать обе стороны карточки:
          <Switch checked={isShowBoth} onChange={toggleShowBoth} />
        </label>
        <Button className="btn" variant="outlined" size="small" onClick={copyFrontToClipboard}>
          Скопировать переднюю часть{/* (ctrl+shift+u)*/}
        </Button>
        <Button className="btn" variant="outlined" size="small" onClick={copyBackToClipboard}>
          Скопировать заднюю часть{/* (ctrl+shift+u)*/}
        </Button>
        <Button className="btn" variant="outlined" size="small" onClick={copyToClipboard}>
          Скопировать все тело карточки{/* (ctrl+shift+u)*/}
        </Button>
        <Button className="btn" variant="outlined" size="small" color="error" onClick={handleClear}>
          Очистить содержимое{/* (ctrl + shift + h)*/}
        </Button>
      </p>
      <div className="rendererField" ref={rendererFieldRef} style={{ height: `calc(100vh - ${offset})` }}>
        {renderMarkupContainers(inputFields)}
      </div>
    </StyledRendererField>
  );
};
