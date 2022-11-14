import { nanoid } from '@reduxjs/toolkit';
import { useEffect, useState, useRef, useCallback } from 'react';
import type { FC } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import '../modules/anki/anki-styles/programming.scss';

import * as highlightSyntax from '../modules/anki/highlight';
import MarkupContainer from '../Components/RightColumn/MarkupContainer';

const StyledDemonstration = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > h1,
  & > div > h1 {
    font-size: clamp(4vw, 4vw, 3.5rem);
  }

  .fade-in-1 {
    animation: fade-in 1.5s cubic-bezier(0.445, 0.05, 0.55, 0.95) 0.2s both;
  }
  .fade-in-2 {
    animation: fade-in 2s cubic-bezier(0.39, 0.575, 0.565, 1) 1.2s both;
  }
  .fade-out-1 {
    animation: fade-in 1.5s cubic-bezier(0.445, 0.05, 0.55, 0.95) reverse both;
  }
  .fade-out-2 {
  }

  & .demo-welcome {
    & .btn {
      margin: 50px auto 0;
      font-size: clamp(3vw, 3vw, 3rem);

      border: 0.01vw solid var(--main-text-color);
      border-radius: 20px;
      padding: 12px 15px;
      width: 200px;
      text-align: center;

      cursor: pointer;
      transition: color 0.15s linear, background-color 0.15s linear;

      &:hover {
        color: var(--main-background-color-1);
        background-color: var(--main-text-color);
      }
    }
  }

  .card {
    border: 0.5px solid var(--main-text-color);
    border-radius: 6px;
    width: 80%;
    min-height: 200px;

    cursor: pointer;

    & .com {
      text-align: center;
    }

    & pre {
      white-space: pre-wrap;
    }
  }

  & a {
    color: var(--link-color);
    text-decoration: inherit;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const nodeJsAnkiCards = [
  [
    {
      language: 'comment',
      side: 'front',
      type: 'comment',
      value: '# Что такое Node.js?',
    },
    {
      language: 'comment',
      side: 'back',
      type: 'comment',
      value: `Node.js это — среда выполнения JavaScript. Что же это значит, и как работает?
      Окружение Node.js включает **все**, что вам нужно для выполнения программы, написанной на JavaScript.
      
## Почему Node.js?
- Node.js — среда выполнения JavaScript, основанная на JavaScript движке V8 из Chrome.
- Node.js использует управляемую событиями, неблокирующую модель ввода-вывода, которая делает ее легкой и эффективной.
- Пакетная экосистема Node.js, npm, является самой большой экосистемой библиотек с открытым исходным кодом в мире.`,
    },
  ],
  [
    {
      language: 'comment',
      side: 'front',
      type: 'comment',
      value: '# Как написать простейший сервер на Node.js?',
    },
    {
      language: 'javascript',
      side: 'back',
      type: 'comment',
      value: `const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(8080);
`,
    },
  ],
  [
    {
      language: 'comment',
      side: 'front',
      type: 'comment',
      value: '# Какие базовые функции в Node.js позволяют работать с файловой системой?',
    },
    {
      language: 'comment',
      side: 'back',
      type: 'comment',
      value: `- ${'`'}fs.appendFile()${'`'}
- ${'`'}fs.open()${'`'}
- ${'`'}fs.writeFile()${'`'}`,
    },
    {
      language: 'javascript',
      side: 'back',
      type: 'comment',
      value: `var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
}); 

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
}); 

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});`,
    },
  ],
].map((card) =>
  card.map((obj: any) => ({
    ...obj,
    id: nanoid(),
    highlightedMarkup: highlightSyntax[obj.language as keyof typeof highlightSyntax](obj.value),
  }))
);

export const Demonstration: FC<{}> = () => {
  const [clicked, setClicked] = useState(false);
  const [welcomeFaded, setWelcomeFaded] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const [isShowBoth, setIsShowBoth] = useState(false);
  const inputFields = useSelector((state: any) => state.inputFields);
  console.log(inputFields);

  function renderMarkupContainers(inputFields: any) {
    if (isShowBoth) {
      return inputFields.map((field: any) => (
        <MarkupContainer className="fade-in-1" key={field.id} value={field.highlightedMarkup} />
      ));
    }
    return inputFields
      .filter((field: any) => field.side === 'front')
      .map((field: any) => <MarkupContainer className="fade-in-1" key={field.id} value={field.highlightedMarkup} />);
  }

  const handleCardClick = () => {
    if (isShowBoth) {
      setCardIndex(cardIndex + 1);
      setIsShowBoth(false);
    } else {
      setIsShowBoth(true);
    }
  };

  useEffect(() => {
    if (clicked) {
      console.log('CLICKED');
    }
  }, [clicked]);

  return (
    <StyledDemonstration>
      <div
        className={['demo-welcome', clicked && 'fade-out-1']
          .filter(Boolean)
          .join(' ')} style={!welcomeFaded ? {} : { display: 'none' }}
      >
        <h1 className="fade-in-1">Узнаем что-то новое про Node.js?</h1>
        <div
          className="btn fade-in-2"
          onClick={() =>
            setClicked((clicked) => {
              if (clicked) {
                return true;
              }

              setTimeout(() => {
                setWelcomeFaded(true);
              }, 1500);
              return true;
            })
          }
        >
          Вперёд!
        </div>
      </div>
      {welcomeFaded && cardIndex !== nodeJsAnkiCards.length && (
        <div className="card" onClick={handleCardClick}>
          {renderMarkupContainers(nodeJsAnkiCards[cardIndex])}
        </div>
      )}
      {cardIndex === nodeJsAnkiCards.length && (
        <h1 className="fade-in-1">
          А что <Link to="/app">создадите</Link> вы?
        </h1>
      )}
    </StyledDemonstration>
  );
};
