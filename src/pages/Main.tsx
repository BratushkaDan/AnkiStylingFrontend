import type { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledMainPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1 {
    margin-top: 100px;
    font-size: clamp(6vw, 6vw, 5rem);
  } 

  & > h2 {
    margin-top: 25px;
    font-size: clamp(3.5vw, 3.5vw, 3rem);
  }

  & > .question-header {
    margin-top: 60px;
  }

  & > .capabilities-container {
    margin-top: 30px;
    
    display: grid;
    grid-template-columns 1fr 1fr;
    grid-template-rows: auto;
    column-gap: 50px;
    row-gap: 30px;

    & a {
      color: inherit;
      text-decoration: inherit;
    }

    & .capability {
      font-size: 1.5rem;
      font-weight: bold;
      max-width: 400px;
      text-align: center;

      cursor: pointer;
      transition: transform .2s linear, color .2s linear;

      &:hover {
        color: var(--link-color);
      }

      @media (max-width: 772px) {
        font-size: 1rem;
      }
    }
  }
  
  .fade-in-h1 {
    animation: fade-in 1.5s cubic-bezier(0.445, 0.050, 0.550, 0.950) 0.2s both;
  }
  .fade-in-h2-1 {
    animation: fade-in 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1.7s both;
  }
  .fade-in-h2-2 {
    animation: fade-in 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) 7s both;
  }
  .slide-in-left {
    animation: slide-in-left 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) 2s both;
  }
  .slide-in-right {
    animation: slide-in-right 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) 4s both;
  }
  .slide-in-bottom-1 {
    animation: slide-in-bottom 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) 3s both;
  }
  .slide-in-bottom-2 {
    animation: slide-in-bottom 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) 5s both;
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes slide-in-left {
    0% {
      transform: translateX(-1000px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-right {
    0% {
      transform: translateX(1000px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes slide-in-bottom {
    0% {
      transform: translateY(1000px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

`;

export const MainPage: FC<{}> = () => {
  return (
    <StyledMainPage>
      <h1 className="fade-in-h1">Добро пожаловать!</h1>
      <h2 className="fade-in-h2-1">На этом веб-сайте Вы можете</h2>
      <div className="capabilities-container puff-in-center-3">
        <Link to="/anki-docs">
          <div className="capability slide-in-left">Узнать про Anki — систему интервальных повторений</div>
        </Link>
        <Link to="/demo">
          <div className="capability slide-in-right">Узнать, как Anki может помочь изучить программирование</div>
        </Link>
        <Link to="/app">
          <div className="capability slide-in-bottom-2">Создать учебные материалы по программированию для Anki</div>
        </Link>
        <Link to="/md-docs">
          <div className="capability slide-in-bottom-1">Ознакомиться с разметкой Markdown</div>
        </Link>
      </div>
      <h2 className="question-header fade-in-h2-2">С чего начнем?</h2>
    </StyledMainPage>
  );
};
