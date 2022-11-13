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
              Justo magna duo ipsum no sit dolores justo sed tempor dolores, lorem invidunt ea magna diam nonumy ipsum
              et, invidunt sed et elitr sit, consetetur dolores amet accusam sit amet.
            </p>
          </div>
        </div>
      </div>
      <div className="spaced-repetition">
        <div className="description">
          <h2>Система интервальных повторений?</h2>
          <div className="text">
            <p>
              Justo magna duo ipsum no sit dolores justo sed tempor dolores, lorem invidunt ea magna diam nonumy ipsum
              et, invidunt sed et elitr sit, consetetur dolores amet accusam sit amet.
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
              Justo magna duo ipsum no sit dolores justo sed tempor dolores, lorem invidunt ea magna diam nonumy ipsum
              et, invidunt sed et elitr sit, consetetur dolores amet accusam sit amet.
            </p>
          </div>
        </div>
      </div>
      <div className="analogues-1">
        <div className="description">
          <h2>Mochi</h2>
          <div className="text">
            <p>
              Justo magna duo ipsum no sit dolores justo sed tempor dolores, lorem invidunt ea magna diam nonumy ipsum
              et, invidunt sed et elitr sit, consetetur dolores amet accusam sit amet.
            </p>
            <p>Mochi является платным ПО</p>
          </div>
        </div>
        <img src={Mochi} />
      </div>
      <div className="analogues-2">
        <img src={Quizlet} />
        <div className="description">
          <h2>Quizlet</h2>
          <div className="text">
            Justo magna duo ipsum no sit dolores justo sed tempor dolores, lorem invidunt ea magna diam nonumy ipsum et,
            invidunt sed et elitr sit, consetetur dolores amet accusam sit amet.
          </div>
        </div>
      </div>
      <div className="aids-programming">
        <div className="description">
          <h2>Помогает в изучении программирования?</h2>
          <div className="text">Ещё как!</div>
        </div>
        <img src={CodingImg} />
      </div>
    </StyledAnkiDocs>
  );
};
