import React, {useCallback, useRef, memo} from 'react';
import styled from 'styled-components'
import {useDispatch} from "react-redux";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DeleteIcon from '@mui/icons-material/Delete'; 

import { languageSelectOptions } from '../../common/languageSelectOptions';
import {modifyField, moveFieldDown, moveFieldUp, removeField} from "../../slices/Field.slice";

const StyledForm = styled(Form)`
.form-leftColumn {
  &-comment, &-code {
    --border-color: hsl(var(--hue), 20%, 30%);
    --background-color: hsl(var(--hue), 20%, 80%);
    --placeholder-color: hsl(var(--hue), 20%, 20%);
  }
  &-comment[data-side="front"] {
    --hue: 170;
  }
  &-code[data-side="front"] {
    --hue: 110;
  }

  &-comment[data-side="back"] {
    --hue: 110;
  }
  &-code[data-side="back"] {
    --hue: 80;
  }

  &Textarea {
    min-height: 10em;
    padding: .3em;
    box-sizing: border-box;

    margin-top: .5em;
    width: 100%;
    resize: vertical;
    border: 1px solid var(--border-color);
    box-sizing: border-box;
    // background: var(--background-color);

    &::placeholder {
      color: var(--placeholder-color);
    }
  }

  &__caption {
    display: flex;
    justify-content: space-between;
    //flex-flow: nowrap row-reverse;

    .controlsContainer > * {
      cursor: pointer;
    }
  }

  .hint {
    cursor: pointer;
    &::selection {
      background: transparent;
    }
  }
}`

const getLanguageAlias = (language: keyof typeof languageSelectOptions) => languageSelectOptions[language]

interface Props {
  language: keyof typeof languageSelectOptions
  side: 'front' | 'back'
  type: 'comment' | 'code'
  id: string
  value: string
  className?: string
}

const ContentEditable = styled.div`
  min-height: 1rem;
  word-wrap: break-word;
  transition: background-color .2s ease;
  outline: 0;

  &:hover:not(:focus) {
    background-color: rgba(0, 0, 0, .07);
  }
`;

function Form({
  id,
  language,
  type,
  side,
  value,
  className
}: Props): React.ReactElement<any, any>  {
  const dispatch = useDispatch();
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const hintRef = useRef<HTMLSpanElement>(null);

  function handleTextarea(e: React.FormEvent<HTMLTextAreaElement>) {
    dispatch(modifyField({value: e.currentTarget!.value, id}))
    e.preventDefault();
  }

  const hint = type === 'comment' ? `Comment` : `Code (${getLanguageAlias(language)})`;

  const handleMoveFieldUp = useCallback(() => {
    dispatch(moveFieldUp(id))
  }, [id])

  const hanldeMoveFieldDown = useCallback(() => {
    dispatch(moveFieldDown(id))
  }, [id])

  const handleRemoveField = useCallback(() => {
    dispatch(removeField(id))
  }, [id])

  const preventKeydownBubbling = useCallback((e: React.FormEvent<HTMLTextAreaElement>) => e.stopPropagation(), [])

  return (
    <form
      className={className}
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
            <ArrowDownwardIcon onClick={hanldeMoveFieldDown} />
          </span>
          <span title="Remove block">
            <DeleteIcon onClick={handleRemoveField} />
          </span>
        </span>
      </div>
      <textarea
        className="form-leftColumnTextarea"
        ref={textAreaRef}
        value={value}
        onKeyDown={preventKeydownBubbling}
        onChange={handleTextarea}
        placeholder={hint}
      />
    </form>);
};

const MemoizedForm = memo(StyledForm);

export { MemoizedForm as Form };