import styled from 'styled-components';
import type { FC } from 'react';

import AnkiAbout from '../assets/anki-about.png';
import CodingImg from '../assets/coding.svg';
import Mochi from '../assets/mochi.jpeg';
import SpacedRepetition from '../assets/spaced-repetition.png';
import Quizlet from '../assets/quizlet.jpg';

const StyledAnkiDocs = styled.main`
  padding: 0 20px;

  display: flex;
  flex-flow: column nowrap;

  max-width: 1192px;
  margin: 0 auto 10px;

  text-align: justify;

  & a {
    color: var(--link-color);
    text-decoration: inherit;
  }

  & > .introduction {
    margin-top: 50px;

    display: flex;
    align-items: center;

    & > img {
      min-width: 200px;
      min-height: 200px;
      width: 30%;
      max-width: 512px;
      max-height: 512px;
    }

    & > .description {
      max-width: 50%;
      margin-left: 25px;

      & > h2 {
        font-size: 2.5rem;
      }
      & > .text {
        font-size: 1.5rem;
      }
    }
  }

  & > .analogues {
    margin-top: 50px;

    & > .description {
      font-size: 1.5rem;

      & > h2 {
        font-size: 2.5rem;
        text-align: center;
      }
    }
  }

  & > .spaced-repetition,
  & > .analogues-1,
  & > .analogues-2,
  & > .aids-programming {
    margin-top: 50px;

    display: grid;
    column-gap: 25px;
    align-items: center;

    & > .description {
      font-size: 1.5rem;
      & > h2 {
        font-size: 2.5rem;
      }
    }
  }

  & > .spaced-repetition {
    grid-template-columns: 9fr 11fr;
  }
  & > .analogues-1 {
    grid-template-columns: 5fr 7fr;
  }
  & > .analogues-2 {
    grid-template-columns: 3fr 7fr;
  }
  & > .aids-programming {
    grid-template-columns: 4fr 6fr;
  }

  @media (max-width: 992px) {
    & > .spaced-repetition,
    & > .analogues,
    & > .analogues-1,
    & > .analogues-2,
    & > .aids-programming {
      grid-template-columns: 1fr;

      & img,
      & .description {
        width: 100%;
        margin-left: 0;
      }
    }

    & h2 {
      text-align: center;
    }

    & .analogues-2,
    & .aids-programming {
      & img {
        order: 1;
        margin-top: 30px;
      }
    }
  }
`;

export const AnkiDocs: FC<{}> = () => {
  return (
    <StyledAnkiDocs>
      <div className="introduction">
        <img src={AnkiAbout} />
        <div className="description">
          <h2>Что такое Anki?</h2>
          <div className="text">
            <p>
              Anki — программа для облегчения запоминания слов, выражений и любой другой информации с помощью
              интервальных повторений.
            </p>
          </div>
        </div>
      </div>
      <div className="spaced-repetition">
        <div className="description">
          <h2>Система интервальных повторений?</h2>
          <div className="text">
            <p>
              Интервальные повторения - техника удержания в памяти, заключающаяся в повторении запомненного учебного
              материала по определённым, постоянно возрастающим интервалам. Хотя этот принцип может найти применение для
              запоминания любой информации, наиболее широкое распространение он получил при изучении иностранных языков.
              Интервальные повторения не предполагают заучивания наизусть без понимания (но и не исключают его), и не
              противопоставляются мнемонике.
            </p>
          </div>
        </div>
        <img src={SpacedRepetition} />
      </div>
      <div className="analogues">
        <div className="description">
          <h2>Что насчет аналогов?</h2>
          <div className="text">
            <p>
              По состоянию на сегодня Anki имеет лишь 2 аналога, обладающие менее гибким функционалом (но все же гибким,
              по сравнению с другими аналогами), при этом имеющими более совершенный интерфейс по сравнению с Anki.
            </p>
            <p>
              Стоит заметить, что Anki — бесплатное ПО, а представленные аналоги условно бесплатны — то есть Anki
              предоставляет функционал, за которые сервисы запрашивают деньги по модели подписки, бесплатно.
            </p>
          </div>
        </div>
      </div>
      <div className="analogues-1">
        <div className="description">
          <h2>Mochi</h2>
          <div className="text">
            <p>
              Это бесплатное приложение (Windows+MacOS+веб), в которое вы сами заносите карточки с материалом, который
              хотите усвоить, а оно вам помогает его запомнить через методику интервального повторения.
            </p>
            <p>
              <strong>Функции, без которых приложением пользоваться неудобно, являются платными в Mochi.</strong>
            </p>
          </div>
        </div>
        <img src={Mochi} />
      </div>
      <div className="analogues-2">
        <img src={Quizlet} />
        <div className="description">
          <h2>Quizlet</h2>
          <div className="text">
            <p>
              это бесплатный сервис, который позволяет легко запоминать любую информацию, которую можно представить в
              виде учебных карточек. Все что требуется — это найти в базе или создать интерактивный материал —
              собственные карточки, добавляя к ним картинки и аудиофайлы и затем выполнять упражнения и играть в игры,
              чтобы запомнить данный материал.
            </p>
            <p>
              Без подписки на Quizlet возможности обучающих значительно ограничены (
              <a
                target="_blank"
                href="https://help.quizlet.com/hc/ru/articles/360041181691-%D0%9F%D0%BE%D0%B4%D0%BF%D0%B8%D1%81%D0%BA%D0%B0-%D0%BD%D0%B0-Quizlet"
              >
                подробнее
              </a>
              )
            </p>
          </div>
        </div>
      </div>
      <div className="aids-programming">
        <div className="description">
          <h2>Помогает в изучении программирования?</h2>
          <div className="text">
            <p>
              Ещё как! Anki не навязывает зубрежку как стиль изучения каких-либо материалов, правильно созданные
              материалы позволяют изучать какую-либо тему, получая понимание. Правильно создать материалы по
              программированию поможет редактор заметок на этом сайте.
            </p>
          </div>
        </div>
        <img src={CodingImg} />
      </div>
    </StyledAnkiDocs>
  );
};
